import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Section #contact introuvable sur cette page.");
    }

    handleCloseMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 px-10 z-10 backdrop-blur-2xl backdrop-brightness-30">
      <div className="flex justify-between ">
        <img
          src={"/images/logo/logo-xs.png"}
          width={100}
          height={49}
          alt="seri-forge logo"
          className="my-5 mr-5"
        />
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 z-10">
          <ul className="flex gap-10 items-center">
            {links.map((link, _index) => {
              return (
                <li
                  key={_index}
                  className="text-white uppercase text-sm md:text-base font-semibold"
                >
                  <Link to={link.href}>{link.name}</Link>
                </li>
              );
            })}
            <li></li>
          </ul>
          <div className="flex items-center">
            <button
              onClick={handleScrollToContact}
              className="text-black uppercase font-semibold text-sm md:text-base bg-custom-yellow p-3 rounded-md text-center cursor-pointer"
            >
              Demande de prix
            </button>
          </div>
        </div>
        {/* Mobile menu icon */}
        <div className="flex lg:hidden items-center ">
          <button onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <X size={30} color="white" />
            ) : (
              <MenuIcon size={30} color="white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-96 py-6" : "max-h-0 py-0"}
        `}
      >
        <div className="flex flex-col gap-10 bg-opacity-90 px-5 rounded-b-xl">
          <ul className="flex flex-col gap-5">
            {links.map((link, _index) => (
              <li key={_index} className="text-white uppercase font-semibold">
                <Link to={link.href} onClick={handleCloseMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleScrollToContact}
            className="text-black uppercase font-semibold bg-custom-yellow p-3 rounded-md"
          >
            Demande de prix
          </button>
        </div>
      </div>
    </header>
  );
};
