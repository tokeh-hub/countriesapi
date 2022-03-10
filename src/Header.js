import React from "react";

const Header = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="flex justify-between items-center px-5 lg:px-20 sm:px-10 py-5 border-b-1px bg-white h-10 w-full shadow-3xl dark:bg-my-blue">
      <h2 className="text-xl font-bold ">Where in the world</h2>
      <div
        onClick={() => setDarkTheme(!darkTheme)}
        className="dark:bg-gray dark:text-gray pl-3"
      >
        {darkTheme ? "💡 Light" : "🌙 Dark"}
      </div>
    </div>
  );
};

export default Header;
