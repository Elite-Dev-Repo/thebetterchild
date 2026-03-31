import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  // Animation variants for reusability
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <header className="bg-foreground/60 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container relative px-4 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center mt-7 justify-center gap-4 w-fit px-8 mx-auto bg-background rounded-full py-1"
          >
            <div className="w-3 h-3 animate-pulse rounded-full bg-foreground"></div>
            <span className="text-sm tracking-wider text-foreground uppercase">
              Investing in the Future
            </span>
          </motion.div>

          {/* Title Animation */}
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md"
          >
            The Better Child Organization.
          </motion.h1>

          {/* Subtext Animation */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-100 font-light leading-relaxed"
          >
            Where every child finds the tools to grow, the freedom to play, and
            the courage to dream big.
          </motion.p>

          {/* Button Group Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              size="lg"
              className="bg-background text-lg px-8 py-6 rounded-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 hover:bg-background/90 text-foreground"
            >
              Become a volunteer
            </Button>

            <a href="#impact">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-sm font-bold bg-foreground backdrop-blur-md text-background hover:scale-105 active:scale-95"
              >
                See Our Impact
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
