import { Entity, Vector2 } from "../engine/types";

export class Obstacle implements Entity {
  id: string;

  position: Vector2;
  width = 40;
  height = 40;

  speed = 200; // pixels per second

  constructor(id: string, x: number, y: number) {
    this.id = id;
    this.position = { x, y };
  }

  update(delta: number) {
    this.position.y += this.speed * delta;
  }
}