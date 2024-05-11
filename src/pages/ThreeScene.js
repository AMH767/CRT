import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

const ThreeScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const shapeGroup = new THREE.Group();
    scene.add(shapeGroup);

    const mat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0.1 },
        pointscale: { value: 0.2 },
        decay: { value: 0.3 },
        size: { value: 0.3 },
        displace: { value: 0.3 },
        complex: { value: 0.0 },
        waves: { value: 0.1 },
        eqcolor: { value: 0.0 },
        rcolor: { value: 0.0 },
        gcolor: { value: 0.0 },
        bcolor: { value: 0.0 },
        fragment: { value: true },
        redhell: { value: true },
      },
      vertexShader,
      fragmentShader,
    });

    // const geo = new THREE.IcosahedronBufferGeometry(2, 6);
    // const wir = new THREE.IcosahedronBufferGeometry(2.3, 2);

    const primitive = {
      shape: new THREE.Mesh(geo, mat),
      point: new THREE.Points(wir, mat),
    };

    shapeGroup.add(primitive.point);
    shapeGroup.add(primitive.shape);

    const options = {
      perlin: {
        speed: 0.1,
        size: 0.9,
        perlins: 1.0,
        decay: 8.83,
        displace: 0.15,
        complex: 1,
        waves: 20,
        eqcolor: 6.4,
        rcolor: 1.1,
        gcolor: 2.0,
        bcolor: 1.0,
        fragment: true,
        points: false,
        redhell: false,
      },
      tornasol: () => {
        TweenMax.to(options.perlin, 1, {
          size: 1.0,
          waves: 3.0,
          complex: 0.65,
          displace: 0.5,
          eqcolor: 9.5,
          rcolor: 1.5,
          gcolor: 1.5,
          bcolor: 1.5,
          ease: Quart.easeInOut,
        });
      },
    };

    const gui = new dat.GUI({ autoPlace: false });
    const folder = gui.addFolder('Options');
    folder.add(options.perlin, 'speed', 0.01, 0.5, 0.01);
    folder.add(options.perlin, 'size', 0.1, 2.0, 0.1);
    folder.add(options.perlin, 'perlins', 0.1, 2.0, 0.1);
    folder.add(options.perlin, 'decay', 0.1, 10.0, 0.1);
    folder.add(options.perlin, 'displace', 0.01, 0.5, 0.01);
    folder.add(options.perlin, 'complex', 0.1, 2.0, 0.1);
    folder.add(options.perlin, 'waves', 1, 50, 1);
    folder.add(options.perlin, 'eqcolor', 0.1, 10.0, 0.1);
    folder.add(options.perlin, 'rcolor', 0.1, 5.0, 0.1);
    folder.add(options.perlin, 'gcolor', 0.1, 5.0, 0.1);
    folder.add(options.perlin, 'bcolor', 0.1, 5.0, 0.1);
    folder.add(options.perlin, 'fragment');
    folder.add(options.perlin, 'points');
    folder.add(options.perlin, 'redhell');
    folder.open();

    const start = Date.now();

    const animate = () => {
      requestAnimationFrame(animate);

      primitive.point.visible = options.perlin.points;

      mat.uniforms['time'].value = (options.perlin.speed / 1000) * (Date.now() - start);

      mat.uniforms['pointscale'].value = options.perlin.perlins;
      mat.uniforms['decay'].value = options.perlin.decay;
      mat.uniforms['size'].value = options.perlin.size;
      mat.uniforms['displace'].value = options.perlin.displace;
      mat.uniforms['complex'].value = options.perlin.complex;
      mat.uniforms['waves'].value = options.perlin.waves;
      mat.uniforms['fragment'].value = options.perlin.fragment ? 1 : 0;

      mat.uniforms['redhell'].value = options.perlin.redhell ? 1 : 0;
      mat.uniforms['eqcolor'].value = options.perlin.eqcolor;
      mat.uniforms['rcolor'].value = options.perlin.rcolor;
      mat.uniforms['gcolor'].value = options.perlin.gcolor;
      mat.uniforms['bcolor'].value = options.perlin.bcolor;

      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    return () => {
      containerRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize, false);
      gui.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
