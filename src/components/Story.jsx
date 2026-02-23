import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Star, Quote } from "lucide-react";
import godday from "../assets/godday.jpeg";

const Story = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <motion.div
        className="container px-6 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Founder Image & Credentials */}
          <motion.div
            className="w-full lg:w-5/12 relative"
            variants={imageVariants}
          >
            <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden bg-muted border-8 border-white shadow-2xl">
              <img
                src={godday}
                alt="Reuben Godday Jairus"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Academic Achievement Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -right-6 z-20 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg max-w-[160px] max-sm:-right-4"
            >
              <GraduationCap className="w-8 h-8 mb-2" />
              <p className="text-xs font-bold leading-tight">
                First Class Graduate
              </p>
              <p className="text-[10px] opacity-80 text-white">
                Early Childhood & Primary Ed (LASU)
              </p>
            </motion.div>

            {/* Entrepreneurship Tag */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute max-sm:hidden -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 flex items-center gap-2"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-slate-700">
                Founder, God Dey's Crunches
              </span>
            </motion.div>
          </motion.div>

          {/* Right: The Narrative */}
          <motion.div
            className="w-full lg:w-7/12 space-y-8"
            variants={textVariants}
          >
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 fill-primary" /> Meet the Founder
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                Reuben Godday <span className="text-primary">Jairus</span>
              </h2>
              <p className="text-xl font-medium text-slate-700 italic border-l-4 border-primary/20 pl-4">
                "Raising a generation of godly, confident, and purpose-driven
                children."
              </p>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Reuben is an Early Years Educator, Parent Coach, and Child
                Evangelist with a deep-seated passion for
                <strong> holistic child development</strong>. His journey is
                fueled by a devotion to God and a commitment to ensuring every
                child positively influences society.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <h5 className="font-bold text-slate-900 mb-1 text-sm">
                    Educational Excellence
                  </h5>
                  <p className="text-xs">
                    Leveraging academic expertise from LASU to promote modern
                    learning.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <h5 className="font-bold text-slate-900 mb-1 text-sm">
                    Spiritual Mentorship
                  </h5>
                  <p className="text-xs">
                    Building a foundation of faith to secure a better tomorrow.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="pt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/2348084472717"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-10 shadow-lg hover:shadow-primary/30 transition-all font-bold"
                >
                  Partner with Reuben
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
