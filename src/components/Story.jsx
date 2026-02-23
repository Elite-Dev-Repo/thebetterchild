import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Star, Quote } from "lucide-react";
import godday from "../assets/tbc7.jpeg";

const Story = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Founder Image & Credentials */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden bg-muted border-8 border-white shadow-2xl">
              {/* Placeholder for Reuben's Photo */}
              <img src={godday} alt="" />
            </div>

            {/* Academic Achievement Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg max-w-[160px] max-sm:-right-4">
              <GraduationCap className="w-8 h-8 mb-2" />
              <p className="text-xs font-bold leading-tight">
                First Class Graduate
              </p>
              <p className="text-[10px] opacity-80">
                Early Childhood & Primary Ed (LASU)
              </p>
            </div>

            {/* Entrepreneurship Tag */}
            <div className="absolute max-sm:hidden -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white px-6 py-3 rounded-full shadow-md border border-slate-100 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-slate-700">
                Founder, God Dey's Crunches
              </span>
            </div>
          </div>

          {/* Right: The Narrative */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 fill-primary" /> Meet the Founder
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                Reuben Godday <span className="text-primary">Jairus</span>
              </h2>
              <p className="text-xl font-medium text-slate-700 italic">
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

              <p>
                With a strong background in faith-based mentorship, Reuben works
                intentionally with parents and educators to build systems that
                support the total development of the child—academically,
                morally, emotionally, and spiritually.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <h5 className="font-bold text-slate-900 mb-1 text-sm">
                    Educational Excellence
                  </h5>
                  <p className="text-xs">
                    Leveraging academic expertise from LASU to promote modern
                    learning.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <h5 className="font-bold text-slate-900 mb-1 text-sm">
                    Spiritual Mentorship
                  </h5>
                  <p className="text-xs">
                    Building a foundation of faith to secure a better tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="rounded-full px-10 shadow-lg hover:shadow-primary/30 transition-all"
              >
                Partner with Reuben
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
