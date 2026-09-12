import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  const socials = [
    {
      label: "Instagram",
      href: "https://instagram.com/bahardev_",
      icon: <FaInstagram className="text-sm" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/baharudinzaelani1",
      icon: <FaFacebookF className="text-xs" />,
    },
    {
      label: "LinkedIn",
      href: "https://id.linkedin.com/in/baharudinzaelani",
      icon: <FaLinkedinIn className="text-sm" />,
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-xs text-zinc-500 font-medium">
        {/* Left note */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-white/45 backdrop-blur-md border border-white/70 px-4 py-1.5 rounded-full shadow-xs">
          <span>Crafted with</span>
          <HiHeart className="text-rose-500 text-sm inline-block" />
        </div>

        {/* Right social quick links */}
        <div className="pointer-events-auto flex items-center gap-1 bg-white/45 backdrop-blur-md border border-white/70 p-1.5 rounded-full shadow-xs">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-white/70 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
