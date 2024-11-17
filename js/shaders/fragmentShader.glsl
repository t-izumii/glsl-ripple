varying vec2 vUv;
uniform vec4 uColor;
uniform sampler2D uDisplacement;
float PI = 3.14159;

void main() {

    vec4 displacement = texture2D(uDisplacement, vUv);
    vec2 newUv = vUv + displacement.r * 0.05;
    vec4 textureColor = texture2D(uDisplacement, newUv);
    vec4 color = mix(uColor, textureColor, 0.5);
    gl_FragColor = color;
}