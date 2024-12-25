"use client";

import { useState } from "react";
import Container from "../atoms/Container-hamburguer";
import Line from "../atoms/Line-hamburguer";

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container onClick={toggleMenu}> {/* Agora o onClick é aceito */}
      {/* Linha superior com rotação */}
      <div
        className={`transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      >
        <Line />
      </div>

      {/* Linha do meio com opacidade */}
      <div
        className={`transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Line />
      </div>

      {/* Linha inferior com rotação */}
      <div
        className={`transform transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      >
        <Line />
      </div>
    </Container>
  );
};

export default HamburguerMenu;
