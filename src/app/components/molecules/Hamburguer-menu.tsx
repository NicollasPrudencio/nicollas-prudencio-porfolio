"use client";

import { useState } from "react";
import Line from "../atoms/Line-hamburguer"; // Certifique-se de que o caminho está correto

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const defaultThickness = 1
  const defaultSpacing = 10;
  const defaultWidth = 30;

  return (
    <div
      className="flex flex-col justify-center items-center w-12 h-12 cursor-pointer"
      onClick={toggleMenu}
    >
      {/* Linha superior */}
      <div
        className={`w-10 h-[2px] mb-[4px] transform transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[5px]" : ""
        }`}
      >
        <Line 
          thickness={defaultThickness ?? undefined}
          spacing={defaultSpacing ?? undefined}
          width={defaultWidth ?? undefined}
          />
      </div>

      {/* Linha do meio */}
      <div
        className={`w-10 h-[2px] mb-[4px] transform transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Line 
          thickness={defaultThickness ?? undefined}
          spacing={defaultSpacing ?? undefined}
          width={defaultWidth ?? undefined}
          />
      </div>

      {/* Linha inferior */}
      <div
        className={`w-10 h-[2px] transform transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[5px]" : ""
        }`}
      >
        <Line 
          thickness={defaultThickness ?? undefined}
          spacing={defaultSpacing ?? undefined}
          width={defaultWidth ?? undefined}
          />
      </div>
    </div>
  );
};

export default HamburguerMenu;