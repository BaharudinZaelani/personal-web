import { div as Div } from "motion/react-client";

const AnimationCard = ({ children, className, delay = 0 }) => {
  return (
    <div className="relative">
      {" "}
      {/* Wrapper untuk menjaga layout */}
      <Div
        className={className}
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {children}
      </Div>
    </div>
  );
};

export default AnimationCard;
