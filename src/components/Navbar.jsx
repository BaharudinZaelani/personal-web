import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router";
import MButton from "./ui/MButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { href: "/", title: "Home" },
    { href: "/projects", title: "Projects" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <header className="fixed top-4 md:top-5 left-0 right-0 z-50 flex flex-col items-center px-4">
      {/* Main Pill Bar */}
      <nav className="w-full max-w-5xl flex items-center justify-between px-5 md:px-6 py-3 rounded-full bg-white/50 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-sm md:text-base font-semibold tracking-tight text-zinc-900 hover:text-black transition-colors"
        >
          Baharudin Zaelani
        </NavLink>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {menus.map((menu) => (
            <NavLink
              key={menu.href}
              to={menu.href}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-zinc-950 bg-white/90 shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-white/50"
                }`
              }
            >
              {menu.title}
            </NavLink>
          ))}

          <div className="h-4 w-px bg-zinc-300/60 mx-2" />

          <a
            href="https://github.com/BaharudinZaelani"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-white/60 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>

        {/* Mobile Device Controls */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://github.com/BaharudinZaelani"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <MButton
            onPress={() => setIsOpen(!isOpen)}
            className="rounded-full bg-white/70 p-2 text-zinc-800 border border-white/80"
          >
            {isOpen ? <CgClose className="text-lg" /> : <CgMenuRightAlt className="text-lg" />}
          </MButton>
        </div>
      </nav>

      {/* Mobile Glass Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="md:hidden mt-2 w-full max-w-sm rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/80 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col gap-1"
          >
            {menus.map((menu, index) => (
              <motion.div
                key={menu.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <NavLink
                  to={menu.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white text-zinc-950 shadow-xs font-semibold"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-white/50"
                    }`
                  }
                >
                  {menu.title}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
