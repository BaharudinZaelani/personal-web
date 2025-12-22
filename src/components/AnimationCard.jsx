import { div as Div } from "motion/react-client";
const AnimationCard = ({ children, className }) => {
  return (
    <Div
      className={className}
      initial={{
        opacity: 0,
        position: "absolute",
        top: 50,
      }}
      whileInView={{ top: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
      }}
      viewport={{ once: true }}
    >
      {children}
    </Div>
  );
};
export default AnimationCard;
