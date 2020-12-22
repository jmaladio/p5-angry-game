import p5 from "p5";
import Matter from "matter-js";
import { Box, Bird, Ground } from "./classes";

const SketchWrapper = (s) => {
  let engine;
  let world;
  let ground;
  const boxes = [];
  let bird;
  s.setup = () => {
    engine = Matter.Engine.create();
    world = engine.world;
    const canvas = s.createCanvas(600, 400);

    const mouse = Matter.Mouse.create(canvas.elt);
    const options = { mouse };
    const mConstraint = Matter.MouseConstraint.create(engine, options);
    Matter.World.add(world, mConstraint);

    ground = new Ground(
      canvas.width / 2,
      canvas.height - 10,
      canvas.width,
      20,
      world
    );
    for (const el of [0, 1, 2]) {
      boxes.push(new Box(450, 300 - 75 * el, 50, 75, world));
    }
    // boxes.push(new Box(450, 300, 50, 75, world));
    bird = new Bird(50, 300, 35, world);
  };

  s.draw = () => {
    s.background(25);
    Matter.Engine.update(engine);
    ground.show(s);
    for (const box of boxes) {
      box.show(s);
    }
    bird.show(s);
  };
};

const Sketch = new p5(SketchWrapper, document.querySelector("main"));

export default Sketch;
