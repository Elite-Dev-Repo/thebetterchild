import React from "react";
import {
  Send,
  MessageCircle,
  Instagram,
  Youtube,
  Music2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://chat.whatsapp.com/Dqj74j5c8gWElFiBgstB6r?mode=ac_t",
    },
    {
      name: "Telegram",
      icon: <Send className="w-5 h-5" />,
      href: "https://t.me/+i1EORmDHfvI1MjVk",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/the_better_child_org?igsh=aGh3bGlkOTd1amxz",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com/@thebetterchildorganization?si=CwQIxVAgAzA2HBIB",
    },
    {
      name: "TikTok",
      icon: <Music2 className="w-5 h-5" />,
      href: "https://www.tiktok.com/@thebetterchild7?_r=1&_t=ZS-92UcR2U6Buc",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Section: Contact / Community CTA */}
      <div className="container mx-auto px-6 pt-20 pb-16" id="footer">
        <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Join The Better Child{" "}
              <span className="text-amber-500">Community</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Stay updated with our latest programs, parenting tips, and success
              stories. Let's build the future together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://chat.whatsapp.com/Dqj74j5c8gWElFiBgstB6r?mode=ac_t"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Group
            </a>
            <a
              href="https://t.me/+i1EORmDHfvI1MjVk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Telegram Channel
            </a>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">The Better Child</h3>
            <p className="text-sm leading-relaxed">
              Raising a generation of godly, confident, and purpose-driven
              children through holistic development and spiritual mentorship.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-background rounded-lg hover:bg-primary hover:text-background  text-foreground transition-all"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="hover:text-background/60 transition-colors"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="hover:text-background/60 transition-colors"
                >
                  Impact Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348084472717"
                  target="_blank"
                  className="hover:text-background/60 transition-colors"
                >
                  Become a Volunteer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-background shrink-0" />
                <span>+234 808 447 2717</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-background shrink-0" />
                <span>thebetterchild10@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Get monthly parenting insights directly to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                disabled
                placeholder="Coming soon..."
                aria-label="Email Address"
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground font-bold py-2 rounded-lg hover:bg-primary/90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-900">
        <div className="container mx-auto px-6 py-8 flex flex-col md:row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} The Better Child Organization. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
