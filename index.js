import * as wasm from "hilbert_wasm_renderer";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

camera.position.set(5, 5, 5);

function render(n, p) {
  // clear any prior geometry
  clearScene(scene);

  // n and p can be passed as arguments directly, or taken from an input form
  n = n == undefined ? document.getElementById("nInput").value : n;
  p = p == undefined ? document.getElementById("pInput").value : p;
  console.log({ n }, { p });
  const hilbert_flat_buffer = wasm.hilbert_coordinates(n, p);

  const hilbertVectors = [];
  for (let i = 0; i < hilbert_flat_buffer.length; i += 3) {
    hilbertVectors.push(
      new THREE.Vector3(
        hilbert_flat_buffer[i],
        hilbert_flat_buffer[i + 1],
        hilbert_flat_buffer[i + 2]
      )
    );
  }

  // default lines renderer for validation
  const lineMaterial = new THREE.LineDashedMaterial({
    color: 0x00ff00,
    dashSize: 3,
    gapSize: 3,
    scale: 1,
    linewidth: 1,
  });

  const bufferGeometry = new THREE.BufferGeometry().setFromPoints(
    hilbertVectors
  );
  const line = new THREE.Line(bufferGeometry, lineMaterial);
  scene.add(line);

  const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
  const capsuleGeometry = new THREE.CapsuleGeometry(0.08, 1, 2);
  capsuleGeometry.rotateX(1.5708);
  capsuleGeometry.rotateY(1.5708);

  for (let i = 0; i < hilbertVectors.length - 2; i++) {
    // tail leading in
    // const lineInGeometry = new THREE.BoxGeometry(0.1, 0.1, 1.1);
    const lineInGeometry = capsuleGeometry.clone();
    const previousVertex =
      i == 0 ? new THREE.Vector3(0, 0, 0) : hilbertVectors[i - 1];
    const lineInDirection = hilbertVectors[i]
      .clone()
      .sub(previousVertex)
      .normalize();
    // lineInGeometry.lookAt(lineInDirection);
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      lineInDirection
    );
    console.log({ quat });
    lineInGeometry.translate(
      hilbertVectors[i].x - lineInDirection.x * 0.5,
      hilbertVectors[i].y - lineInDirection.y * 0.5,
      hilbertVectors[i].z - lineInDirection.z * 0.5
    );
    const lineIn = new THREE.Mesh(lineInGeometry, boxMaterial);
    scene.add(lineIn);

    // tail leading out
    // const lineOutGeometry = new THREE.BoxGeometry(0.1, 0.1, 1.1);
    const lineOutGeometry = capsuleGeometry.clone();
    const lineOutDirection = hilbertVectors[i + 1]
      .clone()
      .sub(hilbertVectors[i])
      .normalize();
    lineOutGeometry.lookAt(lineOutDirection);
    lineOutGeometry.translate(
      hilbertVectors[i + 1].x - lineOutDirection.x * 0.5,
      hilbertVectors[i + 1].y - lineOutDirection.y * 0.5,
      hilbertVectors[i + 1].z - lineOutDirection.z * 0.5
    );
    const lineOut = new THREE.Mesh(lineOutGeometry, boxMaterial);
    scene.add(lineOut);
  }

  const topLight = new THREE.DirectionalLight(0x0000ff, 0.8);
  const bottomLight = new THREE.DirectionalLight(0xff0000, 0.8);
  const leftLight = new THREE.DirectionalLight(0x00ff00, 0.3);
  const rightLight = new THREE.DirectionalLight(0x00ff00, 0.3);

  leftLight.position.set(0, 100, -100);
  topLight.position.set(100, 100, 100);
  bottomLight.position.set(-100, -100, -100);
  scene.add(topLight);
  scene.add(bottomLight);
  scene.add(leftLight);
  const ambientLight = new THREE.AmbientLight(0x00ff00, 0.1);
  scene.add(ambientLight);
}

document.getElementById("renderSubmit").onclick = () => {
  render(undefined, undefined);
};

// start the app with a 3x3 hilbert cube with camera centered in the middle of the cube
render(3, 4);
camera.position.set(2 ** 4 / 2 + 1, 2 ** 4 / 2 + 2, 2 ** 4 / 2);
camera.rotateX(-0.5);
camera.rotateY(-0.5);

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

function animate(obj) {
  requestAnimationFrame(animate);
  camera.rotateY(0.002);
  renderer.render(scene, camera);
}
animate();

function clearScene(scene) {
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }
}
