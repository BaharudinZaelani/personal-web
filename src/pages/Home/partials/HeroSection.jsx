import { div as Div } from "motion/react-client";
import { box } from "../../../assets/css/home";
import image from "../../../assets/images/busy-cat.gif";
import AnimationCard from "../../../components/AnimationCard";

const HeroSection = () => {
  return (
    <div className="w-full relative h-screen px-5 flex flex-col items-center justify-center">
      <Div
        className="z-20"
        style={box}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <img className="rounded-3xl shadow-2xl mb-3" src={image} />
      </Div>
      <div className="relative z-10 w-full justify-center flex text-center">
        <AnimationCard>
          <h1 className="text-6xl mb-4 font-bold">Halo Dunya</h1>
          <p>Website sedang dalam pengembangan . . . (～￣▽￣)～</p>
        </AnimationCard>
      </div>
    </div>
  );
};
export default HeroSection;
