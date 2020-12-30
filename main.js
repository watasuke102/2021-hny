// CopyRight (c) 2020 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
document.addEventListener('touchmove', function(event) {event.preventDefault();}, {passive: false});

const scene    = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({alpha: false});
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

let year = new THREE.Mesh();
let hny  = new THREE.Mesh();
const loader = new THREE.FontLoader();
loader.load(
  'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json',
  function (font) {
    const material   = new THREE.MeshBasicMaterial({ color: 0x93f4ff });
    const y_geometry = new THREE.TextGeometry(
      '2021', {
      font: font,
      size: 6.0,
      height: 1
    });
    y_geometry.center();
    year = new THREE.Mesh(y_geometry, material);
    year.position.y += 4;
    scene.add(year);
    const h_geometry = new THREE.TextGeometry(
      'Happy new year!', {
      font: font,
      size: 6.0,
      height: 1
    });
    h_geometry.center();
    hny  = new THREE.Mesh(h_geometry, material);
    hny.position.y  -= 4;
    scene.add(hny);
  }
);

const tick = function() {
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
  controller.update();
  // Animation
  year.rotation.y -= 0.002;
  hny.rotation.y  -= 0.002;
}

tick();
