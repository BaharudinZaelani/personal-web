import { box } from "../assets/css/home";
import image from "../assets/images/busy-cat.gif";

// Motion components
import { div as Div } from "motion/react-client";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Div
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
      <h1 className="text-6xl mb-4 font-bold">Halo Dunya !</h1>
      <p>Website sedang dalam pengembangan . . . (～￣▽￣)～</p>
    </div>
  );
};
export default Home;
