import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Hero from "@/components/Hero";
import OurService from "@/components/OurService";
export default function Home() {
  return (
    <div>
      <Nav />

      <Hero />
      <About />
      <OurService />
    </div>
  );
}
