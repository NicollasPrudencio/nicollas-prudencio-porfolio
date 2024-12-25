import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  onClick?: () => void; // Adicione o tipo para a propriedade onClick (opcional)
}

const Container: React.FC<ContainerProps> = ({ children, onClick }) => (
  <div
    className="flex flex-col justify-center items-center w-12 h-12 cursor-pointer"
    onClick={onClick} // Passa o evento onClick para o elemento <div>
  >
    {children}
  </div>
);

export default Container;
