
// Scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#222222");
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

// Resize canvas
window.addEventListener('resize', () => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

// Create cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({
	color: 0xff0051, 
	flatShading: true, 
	metalness: 0, 
	roughness: 1 
});

// Add cube to scene
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create wireframed cube
geometry = new THREE.BoxGeometry(3, 3, 3);
material = new THREE.MeshBasicMaterial({
	color: "#dadada", 
	wireframe: true, 
	transparent: true
});

var wireframeCube = new THREE.Mesh(geometry, material);
scene.add(wireframeCube);

// Create ambient light and add it to scene
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// Add point of light for ambient light and add it to scene
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);


// Function for animating both cube and wireframed cube
function animate() {
	requestAnimationFrame(animate);
	// Rotate cube
	cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;
	// Rotate wireframed cube
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.01;
	renderer.render(scene, camera);
}

// Starts animation
animate();