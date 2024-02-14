import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../hooks/useUserStore";

const Header = ({
  backgroundColor,
  logoWidth,
  logoHeight,
  titleColor,
  titleFont,
}) => {
  const { user, logout } = useUserStore();
  return (
    <header className={`sticky top-0 px-4 py-2 w-full ${backgroundColor} z-50`}>
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="./logo.png"
            alt="logo"
            height={logoHeight}
            width={logoWidth}
            className="rounded-full"
          />
          <h1 className={`hidden md:block text-xl font-semibold ${titleColor} ${titleFont}`}>
            WordleCup.io
          </h1>
        </Link>
        {user && (
          <button
            onClick={logout}
            className="text-xs md:text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
          >
            SignOut
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
