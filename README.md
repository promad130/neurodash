# NeuroDash

A high-performance cyberpunk infinite runner.

This project is designed as a systems-level exploration of:
- Game loop architecture
- Frame-based updates
- Engine → Store → UI separation
- Real-time collision detection
- Dynamic difficulty scaling

---

## Phase 1 — Core Engine Complete

### Implemented Systems

### Game Loop
- `requestAnimationFrame` based loop
- Delta time calculation
- Pause / Stop control
- Clean restart lifecycle

### Engine Architecture
- Pure TypeScript game engine
- Entity-based design
- Modular systems structure
- No React dependency inside engine

### Player System
- Position tracking
- Frame-based movement
- Reset handling

### Obstacle System
- Procedural spawning
- Dynamic spawn timing
- Off-screen cleanup
- Speed scaling

### Collision Detection
- Axis-Aligned Bounding Box (AABB)
- Engine-level collision resolution
- Game over trigger

### Score System
- Time-based score accumulation
- Stops on collision
- Resets on restart

### Difficulty Scaling
- Gradual speed increase
- Spawn interval reduction
- Scales infinitely

---

## Architecture


Engine (Core Logic)
↓
Zustand Store (Shared State)
↓
React UI (Render Layer)


The engine is fully decoupled from React components.

---

## Folder Structure


/src
  /game
    /engine
    /entities
    /systems
/store
/screens
/components


---

## Tech Stack

- React Native (Expo)
- TypeScript
- Zustand
- React Native Reanimated (configured)
- Gesture Handler (configured)
- Hermes enabled

---

## What Phase 1 Achieves

A fully functional infinite runner core engine with:

- Smooth frame updates (~60–120 FPS)
- Real-time collision
- Dynamic difficulty
- Clean restart cycle

---

## Next Phase

Phase 2 will focus on:
- Gesture-driven player control
- Ability system
- Slow-motion mechanics
- Advanced animation layer

---

Built as a BGEC learning project.