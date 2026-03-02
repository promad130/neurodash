import { GameEngine } from "@/src/game/engine/GameEngine";
import { useGameStore } from "@/src/store/GameStore";
import { useEffect, useRef } from "react";
import { Button, Text, View } from "react-native";

export default function GameScreen() {
  const playerPosition = useGameStore(state => state.playerPosition);
  const obstacles = useGameStore(state => state.obstacles);
  const gameState = useGameStore(state => state.gameState);
  const score = useGameStore(state => state.score);
  const engineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    engineRef.current = new GameEngine();
    engineRef.current.start();

    return () => {
      engineRef.current?.stop();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text
        style={{
          position: "absolute",
          top: 60,
          alignSelf: "center",
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {score}
      </Text>
      <View
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          backgroundColor: "cyan",
          left: playerPosition.x,
          top: playerPosition.y,
        }}
      />
      {obstacles.map(ob => (
      <View
        key={ob.id}
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          backgroundColor: "red",
          left: ob.x,
          top: ob.y,
        }}
      />
      ))}
      {gameState === "gameover" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Text style={{ color: "white", fontSize: 28, marginBottom: 20 }}>
            GAME OVER
          </Text>

          <Text style={{ color: "white", fontSize: 28, marginBottom: 20 }}>
            Your Score: {score}
          </Text>
        
          <Button
            title="Restart"
            onPress={() => engineRef.current?.restart()}
          />
        </View>
      )}
    </View>
  );
}