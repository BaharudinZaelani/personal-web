import { button as Button, div as Div } from "motion/react-client";
const MButton = ({ children, onPress = () => {}, className = "" }) => {
  return (
    <>
      <Button
        whileHover={{
          scale: 1.3,
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
        whileTap={{ scale: 0.9 }}
        className={`${className} cursor-pointer`}
        onClick={onPress}
      >
        {children}
      </Button>
    </>
  );
};
export default MButton;
