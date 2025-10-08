// Lightweight Three.js animated background (optional).
// Attaches to a full-viewport canvas with id="bg-canvas" if present.
(function(){
  if (typeof THREE === 'undefined') return;
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
  camera.position.z = 8;

  // Particle field
  var count = 600;
  var geometry = new THREE.BufferGeometry();
  var positions = new Float32Array(count * 3);
  for (var i=0; i<count; i++) {
    positions[i*3+0] = (Math.random() - 0.5) * 18;
    positions[i*3+1] = (Math.random() - 0.5) * 10;
    positions[i*3+2] = (Math.random() - 0.5) * 6;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  var material = new THREE.PointsMaterial({ color: 0x60a5fa, size: 0.035, transparent:true, opacity: 0.8 });
  var points = new THREE.Points(geometry, material);
  scene.add(points);

  function resize(){
    var w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  var t = 0;
  function animate(){
    t += 0.0025;
    points.rotation.y += 0.0009;
    points.rotation.x = Math.sin(t) * 0.1;
    material.color.setHSL((0.58 + Math.sin(t)*0.02), 0.9, 0.6);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();
