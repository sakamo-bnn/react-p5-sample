precision mediump float;

varying vec2 vTexCoord;

uniform float u_time;
uniform sampler2D u_tex;

float PI = 3.14159265358979;

float random(vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

mat2 rot(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

float atan2(float y,float x){
    return x==0.?sin(y)*PI/2.:atan(y,x);
}

vec2 xy2pol(vec2 xy){
    return vec2(atan2(xy.y,xy.x),length(xy));
}

vec2 pol2xy(vec2 pol){
    return pol.y*vec2(cos(pol.x),sin(pol.x));
}

void main(void) {
    vec2 uv = vTexCoord;

    uv = (uv - .5)*2.;
    uv.x *= sin(abs(uv.y)*PI+u_time*.2);

    uv = uv * .5 + .5;

    vec4 col = texture2D(u_tex, uv);

    col.r = pow(col.r + .2, 2.);
    col.g = col.g * 2.;
    col.b = pow(col.b, 3.);

    float n = 15. + sin(u_time) * 5.;
    col.rgb = floor(col.rgb * n + .5) / n;

    gl_FragColor = col;
}