import { slide as Menu } from "react-burger-menu";
import "./style.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MenuHam = () => {
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
  }, [activeSection, WindowSize]);

  const isActive = (id) => {
    return `#${id}` === activeSection || window.location.hash === `#${id}`;
  };

  return (
    <>
      {isSmallScreen && (
        <Menu
          right
          burgerButtonClassName={isVisible ? "menuVisible" : "menuHidden"}
        >
          <a
            href="/#About"
            className={`menu-item ${isActive("About") ? "active" : ""}`}
          >
            Quem somos?
          </a>
          <a
            href="/#WhatWeDo"
            className={`menu-item ${isActive("WhatWeDo") ? "active" : ""}`}
          >
            O que fazemos?
          </a>
          <a
            href="/contato"
            className={`menu-item ${
              location.pathname === "/contato" ? "active" : ""
            }`}
          >
            Contato
          </a>
          <a
            href="/ajude"
            className={`menu-item ${
              location.pathname === "/ajude" ? "active" : ""
            }`}
          >
            Como ajudar?
          </a>
        </Menu>
      )}
    </>
  );
};

export default MenuHam;
