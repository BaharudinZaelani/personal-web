import { div as Div } from "motion/react-client";
const AboutHero = () => {
  return (
    <div className="overflow-hidden w-full relative top-12 left-0 right-0 bottom-0">
      <Div
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        initial={{
          y: 0,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="relative overflow-hidden m-0 p-0"
      >
        <div className="md:w-[80%] rounded-xl w-full px-6"></div>
      </Div>
    </div>
  );
};

export default AboutHero;
