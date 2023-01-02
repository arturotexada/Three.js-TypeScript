import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
//scene.background = new THREE.Color(0x4488ff)
const camera = new THREE.PerspectiveCamera(
    75,
    1, //window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

const canvas1 = document.getElementById("c1") as HTMLCanvasElement
const canvas2 = document.getElementById("c2") as HTMLCanvasElement

// Types of Render (WebGL, )
const renderer1 = new THREE.WebGLRenderer({canvas:canvas1})
renderer1.setSize(200,200)
const renderer2 = new THREE.WebGLRenderer({canvas:canvas2})
renderer2.setSize(200,200)
//document.body.appendChild(renderer.domElement)

//render1 controls 1 and 2
new OrbitControls(camera, renderer1.domElement)

//render2 controls 1 and 2
//new OrbitControls(camera, renderer2.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

console.dir(scene)


//  Resize Shape sensitive to Screen
// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer1.render(scene, camera)
    renderer2.render(scene, camera)
}

animate()