import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Users, ShieldCheck, Zap } from "lucide-react";

const Vm = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-background" />,
      title: "Community",
      description: "Building a supportive network for every child's growth.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-background" />,
      title: "Integrity",
      description: "Instilling godly values and strong moral foundations.",
    },
    {
      icon: <Zap className="w-6 h-6 text-background" />,
      title: "Innovation",
      description: "Using modern tools to solve age-old educational gaps.",
    },
  ];

  // Animation Variants
  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-6 mx-auto" id="vision">
        {/* Top Section: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            variants={cardVariants("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To provide children with a holistic environment where they are
              nurtured academically, spiritually, and emotionally, ensuring they
              grow into confident leaders who positively impact society.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-background text-background rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
              <Compass className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become a global beacon for child development, raising a
              generation of purpose-driven individuals who carry the light of
              excellence and faith into every sphere of life.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
            The Pillars of Our Work
          </h4>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Core Values
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-50 rounded-2xl flex flex-col items-center text-center p-8 border border-transparent hover:border-slate-200 transition-colors"
            >
              <div className="mb-6 p-4 bg-slate-900 rounded-full shadow-lg">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {value.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vm;
