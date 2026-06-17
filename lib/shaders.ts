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

  // Oxidized parchment palette
  vec3 bone = vec3(0.929, 0.902, 0.847);
  vec3 ink = vec3(0.086, 0.075, 0.055);
  vec3 oxide = vec3(0.651, 0.263, 0.122);
  vec3 verdigris = vec3(0.247, 0.369, 0.306);
  vec3 ochre = vec3(0.784, 0.580, 0.231);
  vec3 ash = vec3(0.573, 0.541, 0.478);

  // Simplex noise helpers
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
    for (int i = 0; i < 7; i++) {
      value += amplitude * noise(p * frequency);
      frequency *= 2.1;
      amplitude *= 0.48;
    }
    return value;
  }

  // Domain warping for organic feel
  float pattern(vec2 p) {
    float t = uTime * 0.03;
    vec2 q = vec2(
      fbm(p + vec2(0.0, 0.0) + t * 0.3),
      fbm(p + vec2(5.2, 1.3) + t * 0.2)
    );
    vec2 r = vec2(
      fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.15),
      fbm(p + 4.0 * q + vec2(8.3, 2.8) + t * 0.12)
    );
    return fbm(p + 3.5 * r);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 st = vec2(uv.x * aspect, uv.y);

    // Mouse influence - gentle pull, viscous
    vec2 mouseNorm = vec2(uMouse.x, 1.0 - uMouse.y);
    float mouseDist = distance(uv, mouseNorm);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.12;

    // Domain warp mouse displacement
    vec2 warped = st + mouseInfluence * vec2(
      sin(uTime * 0.2 + uv.y * 3.0),
      cos(uTime * 0.15 + uv.x * 2.5)
    );

    // Main pattern
    float f = pattern(warped);

    // Secondary detail layer
    float detail = fbm(warped * 3.0 + uTime * 0.01);

    // Composite noise for color mixing
    float n = f * 0.7 + detail * 0.3;

    // Color mixing - ink diffusing through parchment
    vec3 col = bone;

    // Ash bands - subtle horizontal sediment
    float sediment = smoothstep(-0.1, 0.3, sin(uv.y * 12.0 + f * 4.0) * 0.5 + 0.5);
    col = mix(col, ash * 1.05, sediment * 0.15);

    // Verdigris pools - organic green-copper patches
    float greenPool = smoothstep(0.1, 0.6, f * f);
    col = mix(col, verdigris, greenPool * 0.2);

    // Oxide veins - rust bleeding through
    float oxideVein = smoothstep(0.4, 0.8, n * n * n);
    col = mix(col, oxide, oxideVein * 0.25);

    // Ochre highlights - warm gold in peaks
    float ochreHighlight = smoothstep(0.5, 0.9, f);
    col = mix(col, ochre * 1.1, ochreHighlight * 0.1);

    // Dark ink pooling in valleys
    float inkPool = smoothstep(0.6, -0.2, f);
    col = mix(col, ink * 1.2, inkPool * 0.08);

    // Subtle vignette
    float vig = 1.0 - 0.25 * pow(length((uv - 0.5) * vec2(1.0, 0.8)), 2.0);
    col *= vig;

    // Film grain effect (very subtle)
    float grain = (fract(sin(dot(uv * uResolution, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.02;
    col += grain;

    gl_FragColor = vec4(col, 1.0);
  }
`;
