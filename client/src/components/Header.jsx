import React from "react";

function Header() {
  return (
    <header className="sticky top-0 px-4 py-2 w-full bg-violet-600">
      <div className="container mx-auto flex justify-center lg:justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="logo" height={40} width={40} />
          <h1 className="text-xl font-semibold text-white">WordleCup.io</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
