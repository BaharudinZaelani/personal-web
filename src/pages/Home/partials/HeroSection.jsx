import { useEffect, useRef } from "react";
import AnimationCard from "../../../components/ui/AnimationCard";
import "../assets/css/style.css";
import Typed from "typed.js";
const HeroSection = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front", "Back"],
      typeSpeed: 50,
      backSpeed: 50,
      delay: 1,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full h-full justify-center flex overflow-hidden text-center">
        <div className="gap-4 text-center h-full w-full flex flex-col items-center justify-center overflow-hidden">
          <AnimationCard delay={0.3}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-center font-bold tracking-tight">
              <span ref={el} /> End
            </h1>
          </AnimationCard>
          <AnimationCard delay={0.4} className="relative md:ms-32">
            <div className="absolute left-12 md:bottom-5 md:-left-10 md:-rotate-90">
              Indie Web
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-center  tracking-tight">
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-size-[100%_auto] animate-gradient">
                Developer
              </span>
            </h1>
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/30 via-blue-600/30 to-purple-500/30 blur-xl rounded-lg -z-10 animate-pulse" />
          </AnimationCard>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
