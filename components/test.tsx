"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Test() {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.ul
        className="motion-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[
          { to: "/", text: "Home" },
          { to: "/", text: "Buy" },
          { to: "/", text: "News" },
          { to: "/", text: "About" },
        ].map((linkItem, index) => (
          <motion.li key={index} className="motion-item" variants={item}>
            <Link href={linkItem.to}>{linkItem.text} </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}
