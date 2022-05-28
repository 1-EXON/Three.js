import * as THREE from '../node_modules/three/build/three.module.js'

// Scene (장면) 생성
const scene = new THREE.Scene()
// Camera 생성
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xffffff,1.0)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material1 = new THREE.MeshStandardMaterial({
    color: 0xff8d75,
    metalness: 0.2,
    transparent: true,
    opacity: 1
})

const cubes = new Array()
for (let i = 0; i < 5; i++) {
    cubes.push(new THREE.Mesh(geometry, material1))
    scene.add(cubes[i])
}

cubes[4].position.set(5, 0, 0)

scene.fog = new THREE.Fog(0xffffff, 0.015, 100)

const light = new THREE.PointLight()
light.position.set(0, 10, 100)
scene.add(light)

// 반응형
window.addEventListener('resize', onWindowResize)

camera.position.z = 10


function animate() {
    requestAnimationFrame(animate)

    cubes[0].rotateY(-0.01)
    cubes[0].rotateX(0.01)
    cubes[1].rotateY(0.01)
    cubes[1].rotateX(-0.01)
    cubes[2].rotateY(-0.01)
    cubes[2].rotateX(-0.01)
    cubes[3].rotateY(0.01)
    cubes[3].rotateX(0.01)

    camera.rotateZ(0.01)

    renderer.render(scene, camera)
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize( window.innerWidth, window.innerHeight )

}


animate()