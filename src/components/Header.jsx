import React from "react";
import { Button } from "@/components/ui/button"; // Assuming ShadcnUI path

const Header = () => {
  return (
    <header className="bg-foreground/60 min-h-screen flex items-center justify-center relative">
      <div className="container relative  px-4 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 w-fit px-8 mx-auto bg-background rounded-full py-1">
            <div className="w-3 h-3 animate-pulse rounded-full bg-foreground"></div>
            <span className=" text-sm tracking-wider text-foreground uppercase ">
              Investing in the Future
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
            The Better Child
          </h1>

          <p className="text-xl md:text-2xl text-slate-100 font-light leading-relaxed">
            Where every child finds the tools to grow, the freedom to play, and
            the courage to dream big.
            <br />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-background text-lg px-8 py-6 rounded-sm font-bold shadow-lg  transition-transform hover:bg-background/90 text-foreground"
            >
              Become a volunteer
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-sm font-bold bg-foreground backdrop-blur-md text-background"
            >
              See Our Impact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
