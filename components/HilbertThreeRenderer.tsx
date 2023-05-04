import { useEffect, useRef, useState } from "react";
import * as wasm from "../../pkg/hilbert_wasm_renderer";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

type HilbertThreeRendererProps = {
  initN: number;
  initP: number;
  initPipeThickness: number;
  initGeometryType: string;
};
const HilbertThreeRenderer = (props: HilbertThreeRendererProps) => {
  const { initN, initP, initPipeThickness, initGeometryType } = props;
  const [n, setN] = useState(initN || 3);
  const [p, setP] = useState(initP || 2);
  const [pipeThickness, setInitPipeThickness] = useState(
    initPipeThickness || 0.2
  );
  const [geometryType, setGeometryType] = useState(
    initGeometryType || "square"
  );
  const [isPaused, setIsPaused] = useState(true);
  const THREECanvasMount = useRef(null);

  let rotation = 0;

  // on mount, setup THREE.js scene
  useEffect(() => {
    console.log("called into useeffect");
    let camera;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setPixelRatio(window.devicePixelRatio);

    THREECanvasMount.current.appendChild(renderer.domElement);

    function renderHilbertGeometry() {
      // clear any prior geometry
      clearScene(scene);

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const hilbert_flat_buffer = wasm.hilbert_coordinates(n, p);
      const hilbertVectors = unflattenHilbertVectors(hilbert_flat_buffer);

      const roundedGeometry = new THREE.CapsuleGeometry(pipeThickness, 1, 2);
      const squareGeometry = new THREE.BoxGeometry(
        pipeThickness,
        1 + pipeThickness,
        pipeThickness
      );
      const pipeGeometry =
        geometryType == "round" ? roundedGeometry : squareGeometry;

      // create a correctly rotated capsule geometry and use it like a prefab
      const pipeMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
      pipeGeometry.rotateX(1.5708);
      pipeGeometry.rotateZ(1.5708);

      const geometries = [];
      for (let i = 1; i < hilbertVectors.length; i++) {
        const lineInGeometry = pipeGeometry.clone();
        const previousVertex =
          i == 0 ? new THREE.Vector3(0, 0, 0) : hilbertVectors[i - 1];
        const lineInDirection = hilbertVectors[i]
          .clone()
          .sub(previousVertex)
          .normalize();
        lineInGeometry.lookAt(lineInDirection);
        lineInGeometry.translate(
          hilbertVectors[i].x - lineInDirection.x * 0.5,
          hilbertVectors[i].y - lineInDirection.y * 0.5,
          hilbertVectors[i].z - lineInDirection.z * 0.5
        );
        geometries.push(lineInGeometry);
      }

      const hilbertGeometries = mergeGeometries(geometries);
      const hilbertMeshes = new THREE.Mesh(hilbertGeometries, pipeMaterial);
      hilbertMeshes.geometry.center();
      scene.add(hilbertMeshes);

      const lightOne = new THREE.DirectionalLight(0x00ffff, 0.5);
      const lightTwo = new THREE.DirectionalLight(0x00ff00, 0.4);
      const lightThree = new THREE.DirectionalLight(0xff00ff, 0.5);
      const lightFour = new THREE.DirectionalLight(0xff0000, 0.5);

      lightOne.position.set(0, -1, 0);
      lightTwo.position.set(0, 1, 0);
      lightThree.position.set(-1, 0, 0);
      lightFour.position.set(1, 0, 0);

      for (const light of [lightOne, lightTwo, lightThree, lightFour]) {
        scene.add(light);
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
      scene.add(ambientLight);
    }

    function clearScene(scene) {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    }

    function unflattenHilbertVectors(hilbertFlatBuffer) {
      const hilbertVectors = [];
      for (let i = 0; i < hilbertFlatBuffer.length; i += 3) {
        hilbertVectors.push(
          new THREE.Vector3(
            hilbertFlatBuffer[i],
            hilbertFlatBuffer[i + 1],
            hilbertFlatBuffer[i + 2]
          )
        );
      }
      return hilbertVectors;
    }

    renderHilbertGeometry();

    function animate() {
      requestAnimationFrame(animate);
      // throw the camera in a gentle ellipse around model center
      rotation += 0.006;
      camera.position.x = Math.sin(rotation) * 2 ** p * 1.5;
      camera.position.y = 2 ** p;
      camera.position.z = Math.cos(rotation) * 2 ** p * 1.2;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div ref={THREECanvasMount} />;
};

export default HilbertThreeRenderer;
