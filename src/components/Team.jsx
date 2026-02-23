import React from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";
import godday from "../assets/godday.jpeg";
import per2 from "../assets/tbc5.jpeg";
import per3 from "../assets/tbc7.jpeg";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon } from "@hugeicons/core-free-icons/index";

const Team = () => {
  const members = [
    {
      name: "Reuben Godday Jairus",
      role: "Founder & Lead Educator",
      image: godday,
      bio: "Passionate about holistic child development and spiritual mentorship.",
      featured: true,
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: per2,
      bio: "Expert in educational systems and community outreach programs.",
      featured: false,
    },
    {
      name: "Michael Chen",
      role: "Program Coordinator",
      image: per3,
      bio: "Dedicated to creating innovative learning tools for children.",
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-6 mx-auto" id="team">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            The Hearts Behind TBC
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our <span className="text-primary">Dedicated</span> Team
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A diverse group of educators, mentors, and visionaries committed to
            shaping the leaders of tomorrow.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                member.featured
                  ? "ring-2 ring-slate-500 ring-offset-4"
                  : "border border-slate-100"
              }`}
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Overlay - Sliding Up effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-4 mb-4">
                    <HugeiconsIcon
                      icon={WhatsappIcon}
                      className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors"
                    />
                    <Twitter className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
                    <Mail className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-300 italic mb-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Permanent Info (Below Image) */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
