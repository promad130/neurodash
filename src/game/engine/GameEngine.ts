import { useGameStore } from "@/src/store/GameStore";
import { Dimensions } from "react-native";
import { Obstacle } from "../entities/Obstacle";
import { Player } from "../entities/Player";
import { isColliding } from "../systems/CollisionSystem";
import { Entity, GameState } from "./types";

export class GameEngine {
  private lastTime = 0;
  private animationFrameId: number | null = null;
  private state: GameState = "idle";
  private entities: Entity[] = [];
  private player: Player;
  private obstacles: Obstacle[] = [];
  private spawnTimer = 0;
  private spawnInterval = 1;
  private screenWidth = Dimensions.get("window").width;
  private screenHeight = Dimensions.get("window").height;
  private score = 0;
  private baseObstacleSpeed = 200;
  private difficultyMultiplier = 1;
  private difficultyRamp = 0.05; // increase difficulty by 0.05 * 0.01(delta) so 0.05 per second

  constructor() {
  this.player = new Player();
  this.entities.push(this.player);
  }

  start() {
    if (this.state === "running") return;
    
    this.state = "running";
    useGameStore.getState().setGameState("running");
    
    this.lastTime = performance.now();
    this.loop();
  }

  pause() {
    this.state = "paused";
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  stop() {
    this.state = "gameover";
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private loop = () => {
    if (this.state !== "running") return;

    const currentTime = performance.now();
    const delta = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    this.update(delta);

    this.animationFrameId = requestAnimationFrame(this.loop);
  };

  private spawnObstacle() {
    const x = Math.random() * (this.screenWidth - 40);
    
    const speed = this.baseObstacleSpeed * this.difficultyMultiplier;
    
    const obstacle = new Obstacle(
      Date.now().toString(),
      x,
      -40
    );
  
    obstacle.speed = speed;
  
    this.obstacles.push(obstacle);
  }

  private updateObstacles(delta: number) {
    this.obstacles.forEach(o => o.update(delta));

    // Remove off-screen obstacles
    this.obstacles = this.obstacles.filter(
      o => o.position.y < this.screenHeight + 50
    );
  }

  private checkCollisions() {
    for (const obstacle of this.obstacles) {
      if (isColliding(this.player, obstacle)) {
        this.gameOver();
        break;
      }
    }
  }

  private gameOver() {
    this.state = "gameover";
    const store = useGameStore.getState();
    store.setGameState("gameover");

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private reset() {
    this.score = 0;
    this.spawnTimer = 0;
    this.obstacles = [];
    this.player.position = { x: 100, y: 300 };
    this.difficultyMultiplier = 1;
  }

  restart() {
    this.reset();
    this.state = "running";
    useGameStore.getState().setGameState("running");
    this.lastTime = performance.now();
    this.loop();
  }

  private update(delta: number) {
    if (this.state !== "running") return;

    this.score += delta * 10 //10 points every second approx
    this.spawnTimer += delta;
    this.difficultyMultiplier += this.difficultyRamp * delta;

    const dynamicSpawnInterval = Math.max(
      0.3,
      this.spawnInterval / this.difficultyMultiplier
    );

    if (this.spawnTimer >= dynamicSpawnInterval) {
      this.spawnObstacle();
      this.spawnTimer = 0;
    }

    this.player.update(delta);
    this.updateObstacles(delta);

    this.checkCollisions();

    // Sync store
    const store = useGameStore.getState();

    store.setPlayerPosition({ ...this.player.position });
    store.setObstacles(this.obstacles.map(o => ({
      id: o.id,
      x: o.position.x,
      y: o.position.y
    })));
    store.setScore(Math.floor(this.score));
  }
}