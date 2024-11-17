// import * as THREE from 'three';
import * as THREE from '../node_modules/three/build/three.module.js';
import images from './images.js';
import vertexShader from './shaders/vertexShader.glsl';
import fragmentShader from './shaders/fragmentShader.glsl';
import { NoBlending } from 'three';
import { vec4 } from 'three/webgpu';


class app3 {
    constructor() {
        this.container = document.querySelector('main');
        this.scene = new THREE.Scene();
        this.sceneBg = new THREE.Scene();
        this.mouse = new THREE.Vector2(0.5, 0.5);
        this.prevMouse = new THREE.Vector2(0.5, 0.5);
        this.isPlay = true;
        this.time = 0;
        this.currentWave = 0;



        this.init();
    }

    init() {
        this.baseTexture();
        this.mousePosition();
        this.createCamera();
        this.createRenderer();
        this.createMesh();
        this.render();
    }

    get viewport(){
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;

        return{
            width,
            height,
            aspectRatio
        }
    }

    baseTexture() {
            this.baseTex = new THREE.WebGLRenderTarget(this.viewport.width, this.viewport.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBFormat
        });

        return
    }

    mousePosition() {
            window.addEventListener('mousemove', (event) => {
            this.mouse.x = event.clientX - this.viewport.width / 2;
            this.mouse.y = this.viewport.height / 2 - event.clientY;
        });
    }

    createCamera() {
        let perspective = 1000;
        let fov = (180 * (2 * Math.atan(this.viewport.height / 2 / perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000);
        this.camera.position.z = perspective;
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setClearColor(0x000000);
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
    }
    createMesh() {

        this.geometryFull = new THREE.PlaneGeometry( this.viewport.width, this.viewport.height, 1, 1);
        this.materialFull = new THREE.ShaderMaterial({
            uniforms: {
                uColor: { value: new THREE.Vector4(0.0, 0.5, 1.0, 1.0) }, // 海の色のような青
                uDisplacement: { value: this.baseTex.texture }, // 初期化を確認
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });

        this.screen = new THREE.Mesh(this.geometryFull, this.materialFull);
        this.sceneBg.add(this.screen);

        this.max = 50;
        this.meshes = [];
        let texture = new THREE.TextureLoader().load(images.imageRipple);
        let geometry = new THREE.PlaneGeometry(50, 50, 1, 1);

        for (let i = 0; i < this.max; i++) {

            let material = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                map: texture,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depathTest: false,
                depathWrite: false
            });

            let mesh = new THREE.Mesh(geometry, material);
            mesh.rotation.z = Math.random() * 2 * Math.PI;
            mesh.visible = false;



            this.meshes.push(mesh);
            this.scene.add(mesh);
        }
    }

    stop() {
        this.isPlay = false;
    }

    start() {
        if(!this.isPlay){
            this.isPlay = true;
            this.render();
        }
    }

    setNewWave(x , y ,index) {

        let mesh = this.meshes[index];
        mesh.visible = true;
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.material.opacity = 1;
        mesh.scale.x = 1;
        mesh.scale.y = 1;

    }

    trackMousePos() {
        if( Math.abs(this.mouse.x - this.prevMouse.x) < 4 && Math.abs(this.mouse.y - this.prevMouse.y) < 4){
        } else {
            this.setNewWave( this.mouse.x , this.mouse.y , this.currentWave );
            this.currentWave =  (this.currentWave + 1) % this.max;
        }

        this.prevMouse.x = this.mouse.x;
        this.prevMouse.y = this.mouse.y;
    }

    render() {
        if (!this.isPlay) {
            return;
        }
        this.trackMousePos();
        this.time += 0.01;

        this.renderer.setRenderTarget(this.baseTex);
        this.renderer.render(this.scene, this.camera);

        this.materialFull.uniforms.uDisplacement.value = this.baseTex.texture;
        this.renderer.setRenderTarget(null);
        this.renderer.clear();
        this.renderer.render(this.sceneBg, this.camera);

        requestAnimationFrame(this.render.bind(this));

        this.meshes.forEach((mesh, index) => {
            mesh.rotation.z += 0.01;
            mesh.material.opacity *= 0.9;
            if (mesh.material.opacity < 0.001) {
                mesh.visible = false;
            }
            mesh.scale.x =  mesh.scale.x + 0.2;
            mesh.scale.y = mesh.scale.y + 0.2;
        });
    }


    lerp(a, b, n) {
        return (1 - n) * a + n * b;
    }

}

new app3();
