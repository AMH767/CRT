uniform float time;
uniform float size;
uniform vec3 color;
uniform vec2 windowSize;

varying vec2 vUv;

void main() {
  float dist = distance(vUv, vec2(0.5, 0.5));
  float pulse = sin(time * 5.0) * 0.5 + 0.5;
  float opacity = smoothstep(size - pulse, size + pulse, dist);
  gl_FragColor = vec4(color, opacity);
}