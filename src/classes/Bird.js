import Matter from "matter-js";

export class Bird {
  constructor(x, y, r, world) {
    this.body = Matter.Bodies.circle(x, y, r);
    Matter.World.add(world, this.body);
    this.r = r;
  }

  show(s) {
    const pos = this.body.position;
    const angle = this.body.angle;
    s.push();
    s.translate(pos.x, pos.y);
    s.rotate(angle);
    s.fill(255);
    s.rectMode(s.CENTER);
    s.circle(0, 0, this.r);
    s.pop();
  }
}
