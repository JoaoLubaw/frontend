import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/guardaChuva.png";
import { HeaderContainer } from "./style";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const location = useLocation();
  const WindowSize = (window.innerHeight / 100) * 80;

  const handleScroll = () => {
    if (location.pathname === "/" && window.scrollY < WindowSize) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const { offsetTop, offsetHeight } = section;
      if (
        window.scrollY + WindowSize / 2 > offsetTop &&
        window.scrollY < offsetTop + offsetHeight
      ) {
        currentSection = section.id;
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
      window.history.replaceState(null, "", `#${currentSection}`);
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // Inicializa o estado da seção ativa

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection, WindowSize]); // Dependências para atualizar quando necessário

  const isActive = (id) => {
    return `#${id}` === activeSection || window.location.hash === `#${id}`;
  };

  return (
    <HeaderContainer
      className={isVisible ? "visible container" : "hidden container"}
    >
      <div className="content">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>

        {isSmallScreen ? (
          <></>
        ) : (
          <div className="links">
            <a href="/#About" className={isActive("About") ? "active" : ""}>
              Quem somos?
            </a>
            <a
              href="/#WhatWeDo"
              className={isActive("WhatWeDo") ? "active" : ""}
            >
              O que fazemos?
            </a>
            <a
              href="/contato"
              className={location.pathname === "/contato" ? "active" : ""}
            >
              Contato
            </a>
            <a
              href="/ajude"
              className={location.pathname === "/ajude" ? "active" : ""}
            >
              Como ajudar?
            </a>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
