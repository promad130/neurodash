import { create } from "zustand";

type GameStateType = "idle" | "running" | "gameover";

type PlayerPosition = {
  x: number;
  y: number;
};

type ObstacleState = {
  id: string;
  x: number;
  y: number;
};

type GameStore = {
  // GAME STATUS
  gameState: GameStateType;
  setGameState: (state: GameStateType) => void;

  // PLAYER
  playerPosition: PlayerPosition;
  setPlayerPosition: (pos: PlayerPosition) => void;

  // OBSTACLES
  obstacles: ObstacleState[];
  setObstacles: (obs: ObstacleState[]) => void;

  //SCORE
  score: number;
  setScore: (score: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  // Initial State
  gameState: "idle",

  playerPosition: { x: 100, y: 300 },

  obstacles: [],

  score: 0,

  // Actions
  setGameState: (state) => set({ gameState: state }),

  setPlayerPosition: (pos) => set({ playerPosition: pos }),

  setObstacles: (obs) => set({ obstacles: obs }),

  setScore: (score) => set({ score }),
}));