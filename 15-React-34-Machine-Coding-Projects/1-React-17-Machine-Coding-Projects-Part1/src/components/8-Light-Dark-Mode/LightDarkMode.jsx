import React, { useEffect, useState } from "react";

const LightDarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme")) || theme;

    setTheme(savedTheme);
  }, []);

  function handleClick() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    localStorage.setItem("theme", JSON.stringify(newTheme));
  }

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-black"
      } flex flex-col gap-4 items-center justify-center w-screen h-screen transition-all duration-300`}
    >
      <p
        className={` ${
          theme === "light" ? "text-black" : "text-white"
        } text-2xl font-semibold`}
      >
        Current Theme: {theme.toUpperCase()}
      </p>
      <button
        onClick={handleClick}
        className={`px-4 py-2 border rounded ${
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        } font-semibold`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default LightDarkMode;
