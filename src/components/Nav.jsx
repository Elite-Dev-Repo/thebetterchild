import React, { useState, useEffect } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state if user scrolls more than 50px
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
    { title: "Testimonial", route: "#" },
    { title: "Contact Us", route: "#" },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 h-[70px] w-[95%] flex items-center justify-between px-10 rounded-lg z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-foreground/90 backdrop-blur-md shadow-2xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <a
        href="/"
        className={`font-bold text-xl transition-colors ${
          isScrolled ? "text-background" : "text-white"
        }`}
      >
        Logo
      </a>

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

      <div className="md:hidden">{/* Mobile menu icon */}</div>
    </nav>
  );
}

export default Nav;
