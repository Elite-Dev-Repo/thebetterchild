import React from "react";
import {
  Target,
  Compass,
  Lightbulb,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

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

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto" id="vision">
        {/* Top Section: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
          </div>

          {/* Vision Card */}
          <div className="group p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-background text-background rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become a global beacon for child development, raising a
              generation of purpose-driven individuals who carry the light of
              excellence and faith into every sphere of life.
            </p>
          </div>
        </div>

        {/* Bottom Section: Core Values */}
        <div className="text-center mb-12">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
            The Pillars of Our Work
          </h4>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-50 flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 p-4 bg-slate-900 rounded-full">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {value.title}
              </h4>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vm;
