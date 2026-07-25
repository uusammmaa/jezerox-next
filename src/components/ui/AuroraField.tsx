"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * WebGL domain-warped flow field in the brand palette, cursor-reactive.
 * Falls back to a static CSS gradient when WebGL is unavailable or the
 * viewer prefers reduced motion. Raw WebGL — no dependency, off the LCP path.
 */
export function AuroraField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = (canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    } catch {
      gl = null;
    }
    if (!gl) return;

    const glc = gl;
    const vsrc = "attribute vec2 p; void main(){ gl_Position = vec4(p,0.0,1.0); }";
    const fsrc = `
precision highp float;
uniform vec2 u_res; uniform float u_time; uniform vec2 u_mouse;
float hash(vec2 p){ p=fract(p*vec2(123.34,345.45)); p+=dot(p,p+34.345); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
  float a=hash(i), b=hash(i+vec2(1.0,0.0)), c=hash(i+vec2(0.0,1.0)), d=hash(i+vec2(1.0,1.0));
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y); }
float fbm(vec2 p){ float v=0.0, a=0.5; mat2 m=mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<5;i++){ v+=a*noise(p); p=m*p; a*=0.5; } return v; }
vec3 brand(float t){
  vec3 indigo=vec3(0.294,0.290,0.812), violet=vec3(0.541,0.227,0.651);
  vec3 magenta=vec3(0.769,0.184,0.525), amber=vec3(1.0,0.827,0.306);
  vec3 c=mix(indigo,violet,smoothstep(0.0,0.42,t));
  c=mix(c,magenta,smoothstep(0.38,0.72,t));
  c=mix(c,amber,smoothstep(0.72,1.0,t));
  return c; }
void main(){
  vec2 uv=gl_FragCoord.xy/u_res.xy; vec2 asp=vec2(u_res.x/u_res.y,1.0);
  vec2 p=(uv-0.5)*asp*3.0; float t=u_time*0.06;
  vec2 q=vec2(fbm(p+t), fbm(p+vec2(5.2,1.3)-t*0.8));
  vec2 r=vec2(fbm(p+q*2.2+vec2(1.7,9.2)+t*0.6), fbm(p+q*2.2+vec2(8.3,2.8)-t*0.5));
  float f=fbm(p+r*2.4);
  float glow=pow(clamp(f,0.0,1.0),1.9);
  vec3 ink=vec3(0.031,0.027,0.047);
  vec3 col=mix(ink, brand(f*1.1), glow);
  float md=length((uv-0.5)*asp - (u_mouse-0.5)*asp);
  col += brand(0.5+0.5*sin(u_time*0.3))*0.12*exp(-md*5.0);
  col *= smoothstep(1.55,0.25,length((uv-0.5)*asp));
  col += (hash(uv*u_time)-0.5)*0.025;
  gl_FragColor=vec4(col,1.0);
}`;

    const compile = (type: number, src: string) => {
      const s = glc.createShader(type)!;
      glc.shaderSource(s, src);
      glc.compileShader(s);
      return s;
    };
    const prog = glc.createProgram()!;
    glc.attachShader(prog, compile(glc.VERTEX_SHADER, vsrc));
    glc.attachShader(prog, compile(glc.FRAGMENT_SHADER, fsrc));
    glc.linkProgram(prog);
    if (!glc.getProgramParameter(prog, glc.LINK_STATUS)) return;
    glc.useProgram(prog);

    const buf = glc.createBuffer();
    glc.bindBuffer(glc.ARRAY_BUFFER, buf);
    glc.bufferData(glc.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), glc.STATIC_DRAW);
    const loc = glc.getAttribLocation(prog, "p");
    glc.enableVertexAttribArray(loc);
    glc.vertexAttribPointer(loc, 2, glc.FLOAT, false, 0, 0);

    const uRes = glc.getUniformLocation(prog, "u_res");
    const uTime = glc.getUniformLocation(prog, "u_time");
    const uMouse = glc.getUniformLocation(prog, "u_mouse");

    const mouse = [0.72, 0.4];
    const target = [0.72, 0.4];
    const onMove = (e: MouseEvent) => {
      target[0] = e.clientX / window.innerWidth;
      target[1] = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, canvas.clientWidth * dpr);
      canvas.height = Math.max(1, canvas.clientHeight * dpr);
      glc.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let raf = 0;
    let running = true;
    const loop = () => {
      if (!running) return;
      mouse[0] += (target[0] - mouse[0]) * 0.04;
      mouse[1] += (target[1] - mouse[1]) * 0.04;
      glc.uniform2f(uRes, canvas.width, canvas.height);
      glc.uniform1f(uTime, (performance.now() - start) / 1000);
      glc.uniform2f(uMouse, mouse[0], mouse[1]);
      glc.drawArrays(glc.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(loop);
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (running) loop();
    };
    document.addEventListener("visibilitychange", onVisibility);
    loop();
    canvas.style.opacity = "1";

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="aurora-fallback absolute inset-0" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
