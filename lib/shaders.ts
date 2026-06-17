export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  varying vec2 vUv;

  vec3 bone = vec3(0.929, 0.902, 0.847);
  vec3 verdigris = vec3(0.247, 0.369, 0.306);
  vec3 oxide = vec3(0.651, 0.263, 0.122);
  vec3 ash = vec3(0.573, 0.541, 0.478);

  // Simplex-style hash
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 st = vec2(uv.x * aspect, uv.y);

    // Mouse influence — smoothstep warp
    vec2 mouseNorm = vec2(uMouse.x / uResolution.x, 1.0 - uMouse.y / uResolution.y);
    float mouseDist = distance(uv, mouseNorm);
    float mouseInfluence = smoothstep(0.4, 0.0, mouseDist) * 0.15;

    // Flow field — viscous fBm
    float t = uTime * 0.04;
    vec2 q = vec2(
      fbm(st + vec2(0.0, 0.0) + t),
      fbm(st + vec2(5.2, 1.3) + t)
    );
    vec2 r = vec2(
      fbm(st + 4.0 * q + vec2(1.7, 9.2) + t * 0.7),
      fbm(st + 4.0 * q + vec2(8.3, 2.8) + t * 0.6)
    );
    float f = fbm(st + 4.0 * r + mouseInfluence * vec2(cos(t), sin(t)));

    // Color bands based on noise
    vec3 col = bone;
    col = mix(col, ash, smoothstep(0.0, 0.5, f));
    col = mix(col, verdigris, smoothstep(0.2, 0.7, f * f));
    col = mix(col, oxide, smoothstep(0.5, 1.0, f * f * f));

    // Vignette
    float vig = 1.0 - 0.3 * length((uv - 0.5) * 1.8);
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;
