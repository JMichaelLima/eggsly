"use client";
import { motion } from "framer-motion";
import React from "react";

const Grid: React.FC = () => {
  const boxes = 16;
  const squares = Array.from({ length: boxes }, (_, i) => i);

  const gridContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.sqrt(boxes)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(boxes)}, 1fr)`,
    gap: "10px",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    position: "relative", // Ensure the container is relative for positioning children absolutely
  };

  const gridItemStyle: React.CSSProperties = {
    backgroundColor: "#4a5568", // Example color
    width: "100px",
    height: "100px",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      },
    },
  };

  const variants = {
    hidden: (i: number) => ({
      x: "-50%",
      y: "-50%",
      opacity: 0,
      scale: 0,
      transition: { delay: i * 0.05 }, // Stagger the animation of each box
    }),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <>
      <motion.div
        style={gridContainerStyle}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {squares.map((number) => (
          <motion.div
            key={number}
            style={gridItemStyle}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={number}
          >
            {/* Content of each square */}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Grid;
