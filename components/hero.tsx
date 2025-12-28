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

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageRef.current.classList.add("scrolled");
      } else {
        imageRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-1 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-5">
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold gradient-title">
          Manage Your Wealth Effectively <br /> With Intelligence
        </h1>

        <p className="text-muted-foreground text-lg">
          Our platform offers a comprehensive suite of tools designed to help
          you take control of your financial future. From budgeting and expense
          tracking to investment management and retirement planning, we provide
          everything you need to make informed decisions about your money.
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

        <div ref={imageRef}>
          <Image
            src="/okk.jpg"
            width={1000}
            height={720}
            alt="banner"
            className="rounded-lg shadow-2xl border mx-auto transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
