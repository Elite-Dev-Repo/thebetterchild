import React from "react";
import teamPhoto from "../assets/team-photo.jpeg";

const Filler = () => {
  return (
    <section className=" cont relative w-full h-screen flex items-center justify-center overflow-hidden ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${teamPhoto})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="flex flex-col items-center justify-center relative text-center px-7 bg-foreground/10 backdrop-blur-3xl h-65 text-background">
        <h2 className="text-4xl md:text-6xl font-bold  tracking-tight">
          Making a Difference Together
        </h2>
        <p className=" mt-4 text-xl max-w-2xl mx-auto">
          Every child deserves a chance to shine. Join our community of
          volunteers and mentors.
        </p>
      </div>
    </section>
  );
};

export default Filler;
