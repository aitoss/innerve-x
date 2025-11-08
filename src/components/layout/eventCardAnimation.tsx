"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import PlankImage from "@/components/ui/plankImage";
import EventCard from "@/components/layout/eventCard";
import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import RopeImage from "@/components/ui/rope";

export default function EventCardAnimated() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftRopeRef = useRef<HTMLDivElement>(null);
  const rightRopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current || !cardRef.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Constraint = Matter.Constraint;
    const Composite = Matter.Composite;
    const Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0.005;

    // create renderer with transparent background
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 1300,
        height: 1200,
        wireframes: false,
        background: "transparent", // Make background transparent to see ropes
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Fixed anchor points for ropes
    const leftAnchor = { x: 420, y: 130 };
    const rightAnchor = { x: 1060, y: 130 };

    // Create physics body (suspended rectangle) - starting from top for drop effect
    const cardBody = Bodies.rectangle(740, 450, 900, 380, {
      density: 3,
      frictionAir: 0.01,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
        lineWidth: 0,
      },
    });

    // Create left rope constraint - acts like real rope (can compress but not extend)
    const leftRope = Constraint.create({
      pointA: leftAnchor,
      bodyB: cardBody,
      pointB: { x: -320, y: -250 },
      stiffness: 0.0008,
      damping: 0.001,
      length: 290,
      render: {
        visible: false, // Hide the default spring line
      },
    });

    // Create right rope constraint - acts like real rope (can compress but not extend)
    const rightRope = Constraint.create({
      pointA: rightAnchor,
      bodyB: cardBody,
      pointB: { x: 320, y: -250 },
      stiffness: 0.0008,
      damping: 0.001,
      length: 290,
      render: {
        visible: false, // Hide the default spring line
      },
    });

    // Add bodies and constraints to world
    Composite.add(world, [cardBody, leftRope, rightRope]);

    // Sync card DOM position with physics body and update rope positions
    const updateCardPosition = () => {
      if (cardRef.current) {
        const { x, y } = cardBody.position;
        const angle = cardBody.angle;
        
        // Position so the card's CENTER matches the physics body's CENTER
        cardRef.current.style.left = `${x}px`;
        cardRef.current.style.top = `${y}px`;
        cardRef.current.style.transform = `translate(-157%, -70%) rotate(${angle}rad)`;
        
        // Calculate attachment points on the rotating body
        // pointB: { x: -320, y: -200 } for left, { x: 320, y: -200 } for right
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        
        // Left attachment point (rotated) - using pointB { x: -320, y: -200 }
        const leftAttachX = x + (-320 * cos - (-200) * sin);
        const leftAttachY = y + (-320 * sin + (-200) * cos);
        
        // Right attachment point (rotated) - using pointB { x: 320, y: -200 }
        const rightAttachX = x + (320 * cos - (-200) * sin);
        const rightAttachY = y + (320 * sin + (-200) * cos);
        
        // Calculate rope angles and lengths for LEFT rope
        if (leftRopeRef.current) {
          const dx = leftAttachX - leftAnchor.x;
          const dy = leftAttachY - leftAnchor.y;
          const ropeAngle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert to degrees
          const length = Math.sqrt(dx * dx + dy * dy);
          
          leftRopeRef.current.style.left = `${leftAnchor.x - 750}px`;
          leftRopeRef.current.style.top = `${leftAnchor.y}px`;
          leftRopeRef.current.style.width = `${length}px`;
          leftRopeRef.current.style.height = '10px';
          leftRopeRef.current.style.transform = `rotate(${ropeAngle - 90}deg)`;
          leftRopeRef.current.style.transformOrigin = 'left center';
        }
        
        // Calculate rope angles and lengths for RIGHT rope
        if (rightRopeRef.current) {
          const dx = rightAttachX - rightAnchor.x;
          const dy = rightAttachY - rightAnchor.y;
          const ropeAngle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert to degrees
          const length = Math.sqrt(dx * dx + dy * dy);
          
          rightRopeRef.current.style.left = `${rightAnchor.x - 750}px`;
          rightRopeRef.current.style.top = `${rightAnchor.y}px`;
          rightRopeRef.current.style.width = `${length}px`;
          rightRopeRef.current.style.height = '10px';
          rightRopeRef.current.style.transform = `rotate(${ropeAngle - 90}deg)`;
          rightRopeRef.current.style.transformOrigin = 'left center';
        }
      }
      requestAnimationFrame(updateCardPosition);
    };
    updateCardPosition();

    // cleanup on unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-12 min-h-screen">
      <div style={{ 
          zIndex: 10, }}>

      {/* <CountdownTimerCard /> */}
      </div>
 
      <div
        ref={sceneRef}
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ 
          zIndex: 1,
          pointerEvents: "none" // Canvas never blocks scrolling
        }}
      />

      {/* Left Rope Image */}
      <div
        ref={leftRopeRef}
        className="absolute"
        style={{
          left: "420px",
          top: "300px",
          zIndex: 5,
          pointerEvents: "none",
          height: "10px", // Height of rope
        }}
      >
        <RopeImage />
      </div>

      {/* Right Rope Image */}
      <div
        ref={rightRopeRef}
        className="absolute"
        style={{
          left: "970px",
          top: "200px",
          zIndex: 5,
          pointerEvents: "none",
          height: "10px", // Height of rope
        }}
      >
        <RopeImage />
      </div>

      {/* Clean rectangle container - paste your content here */}
      <div
        ref={cardRef}
        className="absolute select-none"
        style={{ 
          zIndex: 10, 
          pointerEvents: "none",
          transformOrigin: "center center",
          width: "700px",
          height: "280px",
          userSelect: "none",
          WebkitUserSelect: "none"
        }}
      >
        {/* Paste your content here */}<EventCard />
      </div>
    </section>
  );
}
