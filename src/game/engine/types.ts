export type Vector2 = {
  x: number;
  y: number;
};

export type GameState = "idle" | "running" | "paused" | "gameover";

export interface Entity {
  id: string;
  position: Vector2;
  width: number;
  height: number;
  update(delta: number): void;
}