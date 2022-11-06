import box from "./Box"
import camera from "./Camera"
import light from "./Light"
import renderer from "./Renderer"
import resize from "./Resize"
import scene from "./Scene"

scene.add(box)
scene.add(light)
camera.position.set(1, 2, 5)
camera.lookAt(box.position)
resize.start(renderer)
renderer.render(scene, camera)

setInterval(() => {
    renderer.render(scene, camera)
}, 1000 / 30)