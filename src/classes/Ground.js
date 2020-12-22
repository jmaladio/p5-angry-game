import { Box } from "./Box.js";

export class Ground extends Box {
  constructor(x, y, w, h, world) {
    super(x, y, w, h, world);
    this.body.isStatic = true;
  }
}
