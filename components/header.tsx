"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LogoPic from "../app/assets/egg-logo.png";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="flex justify-between p-1 sm:p-3 items-center">
      <Image src={LogoPic} alt="Eggsly Logo" height={100} />
      <Nav />
    </div>
  );
}
