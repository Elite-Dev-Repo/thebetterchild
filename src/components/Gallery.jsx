import React from "react";
import MyCarousel from "./MyCaurosel";
import { Images } from "lucide-react";

const Gallery = () => {
  return (
    <section className="py-24 " id="impact">
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            <Images className="w-4 h-4" />
            Impact Gallery
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Moments that <span className="text-primary">Matter</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A glimpse into our journey of nurturing, teaching, and empowering
            the next generation. Every smile tells a story of hope and growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Subtle glow effect behind carousel */}
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative flex items-center justify-center">
            <MyCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
