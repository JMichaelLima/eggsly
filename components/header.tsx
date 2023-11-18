"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "./grid";

export default function Header() {

  return (
    <div className="flex justify-around bg-sky-100">
      <Logo/>
      <ul className="flex justify-between">
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
