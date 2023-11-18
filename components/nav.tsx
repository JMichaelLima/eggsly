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
    <motion.nav className="text-white flex justify-center">
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
              className="bg-blue-300 bg-opacity-20 border-t-2 border-l-2 border-white hover:shadow-2xl text-sky-100 font-light sm:text-xl rounded-full w-20 h-20 sm:w-28 sm:h-28 shadow-lg cursor-pointer flex justify-center items-center"
            >
              {link.linkText}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
