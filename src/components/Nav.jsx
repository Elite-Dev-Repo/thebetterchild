import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons
import logo from "../assets/tbclogo.png";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "Home", route: "#" },
    { title: "Our Story", route: "#" },
    { title: "Team Members", route: "#team" },
    { title: "Contact Us", route: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 w-[95%] z-[100] transition-all duration-300 rounded-2xl ${
        isScrolled
          ? "bg-foreground/80 backdrop-blur-md shadow-2xl h-[70px]"
          : "bg-transparent h-[80px]"
      } flex items-center justify-between px-6 md:px-10`}
    >
      {/* Logo */}
      <a href="/" className="z-[110] backdrop-blur-sm rounded-lg">
        <img src={logo} className="w-32 md:w-15 transition-all" alt="Logo" />
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <li key={link.title}>
            <a
              className={`text-xs uppercase font-medium tracking-widest px-4 py-2 rounded-full transition-all ${
                isScrolled
                  ? "text-background/70 hover:bg-background hover:text-foreground"
                  : "text-white/80 hover:bg-white/20 hover:text-white"
              }`}
              href={link.route}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden z-[110]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-lg transition-colors ${
            isScrolled ? "text-background" : "text-white"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`absolute top-0 left-0 w-full rounded-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 pt-20 pb-6" : "max-h-0 opacity-0"
        } ${isScrolled ? "bg-foreground shadow-2xl" : "bg-black/90 backdrop-blur-lg"}`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <li key={link.title}>
              <a
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-sm uppercase font-bold tracking-[0.2em] text-white/90 hover:text-amber-500 transition-colors"
                href={link.route}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
