"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const navLinks = [
  { linkText: "Home", linkUrl: "/" },
  { linkText: "About", linkUrl: "/about" },
  { linkText: "Contact", linkUrl: "/contact" },
];

const Nav: React.FC = () => {
  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 0.8,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <motion.div className="container mx-auto p-4 bg-black bg-opacity-10 max-w-max rounded-xl shadow">
      <motion.nav className="flex justify-center">
        <ul>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="inline-block m-2"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link
                href={link.linkUrl}
                className="text-sky-50 cursor-pointer flex justify-center items-center px-1 sm:px-6"
              >
                {link.linkText}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default Nav;
