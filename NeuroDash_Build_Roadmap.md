# NeuroDash --- Execution Roadmap (Step-by-Step Build Plan)

This document defines the structured development flow for building
NeuroDash using Expo + React Native (TSX).

The goal is to build like a real production system: - Layered
architecture - Clean separation of concerns - Performance-first
mindset - Scalable backend design

------------------------------------------------------------------------

# Phase 0 --- Project Setup & Architecture Foundation (COMPLETED)

## 0.1 Install Core Dependencies

-   react-native-reanimated
-   react-native-gesture-handler
-   @shopify/react-native-skia
-   zustand
-   react-navigation
-   react-native-mmkv

## 0.2 Configure Reanimated & Gesture Handler properly

-   Babel config update
-   Enable Hermes
-   Ensure JSI compatibility

------------------------------------------------------------------------

# Phase 1 --- Core Game Engine (NO Backend Yet)

Goal: Build a working infinite runner loop.

## 1.1 Game Loop System

-   Create GameEngine.ts
-   Implement requestAnimationFrame loop
-   Implement delta time calculation
-   Add pause / resume functionality

## 1.2 Player Entity

-   Position tracking (x, y)
-   Velocity system
-   Shared values (Reanimated)
-   Basic movement logic

## 1.3 Obstacle System

-   Procedural obstacle spawning
-   Object pooling system
-   Dynamic speed scaling

## 1.4 Collision Detection

-   Bounding box detection
-   Hitbox tuning
-   Game over trigger

## 1.5 Score System

-   Score increments over time
-   Display UI score counter

Deliverable: Playable prototype with basic movement + collision.

------------------------------------------------------------------------

# Phase 2 --- Gesture & Interaction Layer

Goal: Make gameplay feel responsive and fluid.

## 2.1 Swipe Detection

-   Horizontal dodge movement
-   Snap animation with easing

## 2.2 Tap Shield Ability

-   Temporary invulnerability state
-   Cooldown logic

## 2.3 Long Press Slow Motion

-   Modify global time multiplier
-   Smooth transition into slow motion
-   Motion blur effect

## 2.4 Multi-touch Special Ability

-   Energy meter system
-   Trigger special effect animation

Deliverable: Full gesture-driven gameplay.

------------------------------------------------------------------------

# Phase 3 --- Advanced Animation & Effects

Goal: Make it visually insane.

## 3.1 Neon Trails

-   Skia drawing
-   Trailing interpolation logic

## 3.2 Particle System

-   On collision
-   On ability activation

## 3.3 Screen Shake

-   Interpolated camera offset
-   Physics-based damping

## 3.4 Death Animation

-   Glitch effect
-   Pixel explosion
-   Fade-to-score screen

Deliverable: Polished arcade feel.

------------------------------------------------------------------------

# Phase 4 --- State Architecture & Optimization

Goal: Make it scalable and clean.

## 4.1 Global Game Store (Zustand)

-   Game state
-   Player state
-   Ability state
-   UI state

## 4.2 Performance Optimization

-   Avoid unnecessary re-renders
-   Memoize components
-   Profile frame rate
-   Optimize Skia drawings

## 4.3 Object Pool Optimization

-   Recycle obstacles
-   Avoid GC spikes

Deliverable: Stable 60--120 FPS gameplay.

------------------------------------------------------------------------

# Phase 5 --- Backend Integration (Appwrite)

Goal: Add real user progression.

## 5.1 Authentication

-   Email login
-   Anonymous login option

## 5.2 Score Submission

-   Store high scores
-   Validate score server-side

## 5.3 Leaderboard Screen

-   Global ranking query
-   Animated leaderboard UI

## 5.4 Player Stats Collection

-   Total runs
-   Average reaction time
-   Best streak

Deliverable: Fully connected online system.

------------------------------------------------------------------------

# Phase 6 --- Advanced Features

## 6.1 Skill Tree Screen

-   Zoomable canvas
-   Unlock animations

## 6.2 Ghost Replay Mode

-   Record player run
-   Store frame data
-   Replay via Realtime

## 6.3 Ranked MMR System

-   Elo-style calculation
-   Tier display UI

------------------------------------------------------------------------

# Phase 7 --- Production Polish

-   Splash screen animation
-   App icon & branding
-   Sound design integration
-   Haptics
-   Dark cyberpunk theme system
-   App performance profiling
-   Test on low-end devices

------------------------------------------------------------------------

# Development Strategy

Rule 1: Build core logic before visuals. Rule 2: Never optimize
prematurely. Rule 3: Separate engine logic from UI layer. Rule 4: Test
performance after every major feature.

------------------------------------------------------------------------
