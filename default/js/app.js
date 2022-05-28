import * as THREE from '../node_modules/three/build/three.module.js'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xffffff,1.0)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material1 = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
const cube1 = new THREE.Mesh(geometry, material1)
scene.add(cube1)
const cube2 = new THREE.Mesh(geometry, material1)
scene.add(cube2)
const cube3 = new THREE.Mesh(geometry, material1)
scene.add(cube3)
const cube4 = new THREE.Mesh(geometry, material1)
scene.add(cube4)

scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: 0x44aa88 })
scene.fog = new THREE.Fog(0xffffff, 0.015, 100)



const light = new THREE.PointLight()
light.position.set(0, 0, 5)
scene.add(light)
// let helper = new THREE.CameraHelper(light.shadow.camera)
// scene.add(helper)

window.addEventListener( 'resize', onWindowResize );

camera.position.z = 10


function animate() {
    requestAnimationFrame(animate)

    cube1.rotateY(-0.01)
    cube1.rotateX(0.01)
    cube2.rotateY(0.01)
    cube2.rotateX(-0.01)
    cube3.rotateY(-0.01)
    cube3.rotateX(-0.01)
    cube4.rotateY(0.01)
    cube4.rotateX(0.01)

    renderer.render(scene, camera)
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}


animate()