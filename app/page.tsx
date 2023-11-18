"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main>
      {/*<main className="flex justify-center items-center min-h-screen">*/}
      <motion.div className="container mx-auto p-4">
        <Nav />
        {/* Other children elements can go here */}
      </motion.div>
    </main>
  );
}
