import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function MenuRight() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [profileHover, setProfileHover] = useState(false);
  const [settingsHover, setSettingsHover] = useState(false);

  return menuOpen === false ? (
    <div
      onMouseEnter={() => setMenuOpen(true)}
      className="w-16 h-screen bg-white fixed top-0 right-0 z-10 rounded-l-3xl shadow-lg flex flex-col justify-center items-center transition-all duration-500"
    >
      {/* Menu items container */}
      <div className="flex-1 flex-col justify-center items-center mt-4 space-y-4 transition-all duration-500">
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "user" })}
            size="xl"
            style={{ color: "black" }}
          />
        </div>
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "gear" })}
            size="xl"
            style={{ color: "black" }}
          />
        </div>
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center"></div>
      </div>
    </div>
  ) : (
    <div
      onMouseLeave={() => setMenuOpen(false)}
      className="w-80 h-screen bg-white fixed top-0 right-0 z-10 rounded-l-3xl shadow-lg flex flex-col justify-center items-center transition-all duration-500"
    >
      {/* Menu items container */}
      <div className="flex-1 flex-col justify-center items-center mt-4 space-y-4 transition-all duration-500">
        {/* Profile */}
        <div
          className="w-72 h-12 bg-gray-800 rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4"
          onMouseEnter={() => setProfileHover(true)}
          onMouseLeave={() => setProfileHover(false)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "user" })}
            size="xl"
            style={{ color: "white" }}
            beat={profileHover}
          />
          <p
            className="ml-4 text-gray-200 transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            Profile
          </p>
        </div>
        {/* Settings */}
        <div
          className="w-72 h-12 bg-gray-800 rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4"
          onMouseEnter={() => setSettingsHover(true)}
          onMouseLeave={() => setSettingsHover(false)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "gear" })}
            size="xl"
            style={{ color: "white" }}
            beat={settingsHover}
          />
          <p
            className="ml-4 text-gray-200 transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            Settings
          </p>
        </div>
        <div className="w-72 h-12 bg-gray-800 rounded-full mt-4 transition-all duration-500 hover:bg-gray-700"></div>
      </div>
    </div>
  );
}

export default MenuRight;