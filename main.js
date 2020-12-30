// CopyRight (c) 2020 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
const scene    = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera   = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const controller = new THREE.OrbitControls(camera);

camera.position.set(0, 0, 60)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let text = new THREE.Mesh();
const loader = new THREE.FontLoader();
loader.load(
  'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json',
  function (font) {
    const geometry = new THREE.TextGeometry(
      '2021\nHappy new year', {
      font: font,
      size: 6.0,
      height: 1
    }
    );
    geometry.center();
    text = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: 0xff00ff })
    );
    scene.add(text);
  }
);

const tick = function() {
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
  controller.update();
  requestAnimationFrame(tick);
}

tick();
