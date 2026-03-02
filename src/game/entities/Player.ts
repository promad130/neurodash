import { Entity, Vector2 } from "../engine/types";

export class Player implements Entity {
  id = "player";

  position: Vector2 = { x: 100, y: 300 };

  width = 40;
  height = 40;

  velocity: Vector2 = { x: 0, y: 0 };

  update(delta: number) {
    // Simple horizontal movement test
    this.position.x += 100 * delta; // 100px per second

    // Reset if goes off screen
    if (this.position.x > 350) {
      this.position.x = 0;
    }
  }
}