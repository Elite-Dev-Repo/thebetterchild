import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";

const Team = () => {
  // Container variants to handle the staggering of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const images = [
    {
      src: team1,
      alt: "The Better Child Team Photo 1",
    },
    {
      src: team2,
      alt: "The Better Child Team Photo 2",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container px-6 mx-auto" id="team">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            The Hearts Behind The Better Child
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our <span className="text-primary">Dedicated</span> Team
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A passionate group of educators, coaches, and spiritual advisors
            committed to shaping the leaders of tomorrow.
          </p>
        </motion.div>

        {/* Team Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-4 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-4/3 rounded-2xl bg-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
