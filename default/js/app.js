import * as THREE from '../node_modules/three/build/three.module.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material1 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube1 = new THREE.Mesh( geometry, material1 );
const cube2 = new THREE.Mesh( geometry, material2 );
scene.add( cube1);
scene.add(cube2)

camera.position.z = 10;
cube2.position.z = 1;
cube1.position.x = 1;
cube2.rotation.x = 10;
cube1.rotation.x = 10;

let x = -50

function animate() {
    requestAnimationFrame( animate );

    if ((0 < x) && (x < 100)) {
        camera.rotateX(x*0.0001)
    } else if ((0 >= x) && (x >= -100)) {
        camera.rotateX(x*0.0001)
    } else {
        x = -100
    }
    

    cube2.rotateZ(0.01)

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render( scene, camera );
    x++
};



animate();