import { FooterContainer } from "./style";
import Heart from "../../assets/heart.png";

const Footer = ({ mode }) => {
  return (
    <FooterContainer
      className={`container ${mode === "relative" ? "relative" : "absolute"} `}
    >
      <span>Feito com </span>
      <img src={Heart} alt="Amor" />
      <span>por</span>
      <a target="_blank_" href="https://joaolubawaski.vercel.app">
        João Lubawaski
      </a>
    </FooterContainer>
  );
};

export default Footer;
