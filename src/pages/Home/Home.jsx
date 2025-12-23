import Navbar from "../../components/Navbar";
import RotatingText from "../../components/ui/RotationText";
import HeroSection from "./partials/HeroSection";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Navbar />
      <HeroSection />
    </div>
  );
};
export default Home;
