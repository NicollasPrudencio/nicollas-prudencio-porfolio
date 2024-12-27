import HamburguerMenu from "../molecules/Hamburguer-menu"; // Molécula: Menu Hambúrguer
import LogoText from "../atoms/LogoText"; // Átomo: Texto do logo
import Underline from "../atoms/Underline-navbar"; // Átomo: Linha inferior

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center w-full shadow-md bg-white">
      <div className="flex justify-between items-center w-full px-80 py-2">
        {/* Logo */}
        <LogoText />

        {/* Menu Hamburguer */}
        <div>
          <HamburguerMenu />
        </div>
      </div>

      {/* Linha inferior */}
      <Underline />
    </nav>
  );
};

export default Navbar;
