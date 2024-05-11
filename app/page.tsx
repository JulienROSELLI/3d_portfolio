"use client";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Tech from "./_components/Tech";
import Works from "./_components/Works";
import Feedbacks from "./_components/Feedbacks";
import Contact from "./_components/Contact";
import { StarsCanvas } from "./_components";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <StarsCanvas />
        <Contact />
      </div>
    </main>
  );
}
