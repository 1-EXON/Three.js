import * as THREE from '../node_modules/three/build/three.module.js'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material1 = new THREE.MeshBasicMaterial({ color: 0xffffff })
const cube1 = new THREE.Mesh(geometry, material1)
scene.add(cube1);

camera.position.z = 10


window.addEventListener("keydown", (e) => {
    if (e.key === 'w') cube1.translateY(0.1)
    else if (e.key === 'a') cube1.translateX(-0.1)
    else if (e.key === 's') cube1.translateY(-0.1)
    else if (e.key === 'd') cube1.translateX(0.1)
    else if (e.key === 'ArrowUp') cube1.rotateY(0.1)
    else if (e.key === 'ArrowLeft') cube1.rotateX(-0.1)
    else if (e.key === 'ArrowDown') cube1.rotateY(-0.1)
    else if (e.key === 'ArrowRight') cube1.rotateX(0.1)
    
})


function animate() {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
}



animate()