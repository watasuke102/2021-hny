// CopyRight (c) 2020 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
const scene    = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera   = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const controller = new THREE.OrbitControls(camera);

camera.position.set(0, 0, 3)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
);
scene.add(cube);

const tick = function() {
  renderer.render(scene, camera);
  controller.update();
  requestAnimationFrame(tick);
}

tick();