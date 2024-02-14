import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ backgroundColor, logoWidth, logoHeight, titleColor, titleFont }) => {
  return (
    <header className={`sticky top-0 px-4 py-2 w-full ${backgroundColor}`}>
      <div className="container mx-auto flex justify-center lg:justify-between items-center gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="./logo.png"
            alt="logo"
            height={logoHeight}
            width={logoWidth}
            className="rounded-full"
          />
          <h1
            className={`text-xl font-semibold ${titleColor} ${titleFont}`}
          >
            WordleCup.io
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
