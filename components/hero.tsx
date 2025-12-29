"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      if (window.scrollY > 100) {
        imageRef.current.classList.add("hero-image-scrolled");
      } else {
        imageRef.current.classList.remove("hero-image-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-3 px-4 text-center">
      {/* TEXT */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold gradient-title">
          Manage Your Wealth Effectively <br /> With Intelligence
        </h1>

        <p className="text-muted-foreground text-lg">
          Our platform offers a comprehensive suite of tools designed to help
          you take control of your financial future.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-black text-white hover:bg-red-600">
              Getting Started
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* IMAGE */}
      <div className="hero-image-wrapper mt-16 flex justify-center">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/download.jpg"
            width={1100}
            height={720}
            alt="banner"
            className="rounded-xl shadow-2xl border"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
