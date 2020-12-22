import Matter from "matter-js";

export class Box {
  constructor(x, y, w, h, world) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show(s) {
    const pos = this.body.position;
    const angle = this.body.angle;
    s.push();
    s.translate(pos.x, pos.y);
    s.rotate(angle);
    s.fill(255);
    s.rectMode(s.CENTER);
    s.rect(0, 0, this.w, this.h);
    s.pop();
  }
}
