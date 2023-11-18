"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LogoPic from "../app/assets/aspen.svg";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="flex justify-between p-3">
      <Image src={LogoPic} alt="Eggsly Logo" height={75} />
      <Nav />
    </div>
  );
}
