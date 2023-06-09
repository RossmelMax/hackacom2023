import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function MenuRight() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [profileHover, setProfileHover] = useState(false);
  const [organizationsHover, setOrganizationsHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [settingsHover, setSettingsHover] = useState(false);

  return menuOpen === false ? (
    <div
      onMouseEnter={() => setMenuOpen(true)}
      className="w-16 h-screen bg-[#4B9B9D] fixed top-0 right-0 z-10 rounded-l-3xl shadow-lg flex flex-col justify-center items-center transition-all duration-500"
    >
      {/* Menu items container */}
      <div className="flex-1 flex-col justify-center items-center mt-4 space-y-4 transition-all duration-500">
        {/* Profile */}
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "user" })}
            size="xl"
            style={{ color: "#022A3D" }}
          />
        </div>
        {/* Organizations */}
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "users" })}
            size="xl"
            style={{ color: "#022A3D" }}
          />
        </div>
        {/* Projects */}
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "clipboard-list" })}
            size="xl"
            style={{ color: "#022A3D" }}
          />
        </div>
        {/* Settings */}
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "gear" })}
            size="xl"
            style={{ color: "#022A3D" }}
          />
        </div>
        {/* Logout */}
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon={icon({ name: "sign-out-alt" })}
            size="xl"
            style={{ color: "#022A3D" }}
          />
        </div>
        <div className="w-10 h-12 rounded-full transition-all duration-500 flex flex-row justify-center items-center"></div>
      </div>
    </div>
  ) : (
    <div
      onMouseLeave={() => setMenuOpen(false)}
      className="w-80 h-screen bg-[#4B9B9D] fixed top-0 right-0 z-10 rounded-l-3xl shadow-lg flex flex-col justify-center items-center transition-all duration-500"
    >
      {/* Menu items container */}
      <div className="flex-1 flex-col justify-center items-center mt-4 space-y-4 transition-all duration-500">
        {/* Profile */}
        <div
          className="w-72 h-12 bg-[#022A3D] rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4"
          onMouseEnter={() => setProfileHover(true)}
          onMouseLeave={() => setProfileHover(false)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "user" })}
            size="xl"
            style={{ color: "#F4EDD8" }}
            beat={profileHover}
          />
          <p
            className="ml-4 text-[#F4EDD8] transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            Profile
          </p>
        </div>
        {/* Organizations */}
        <div
          className="w-72 h-12 bg-[#022A3D] rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4"
          onMouseEnter={() => setOrganizationsHover(true)}
          onMouseLeave={() => setOrganizationsHover(false)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "users" })}
            size="xl"
            style={{ color: "#F4EDD8" }}
            beat={organizationsHover}
          />
          <p
            className="ml-4 text-[#F4EDD8] transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            Organizations
          </p>
        </div>
        {/* Projects */}
        <div
          className="w-72 h-12 bg-[#022A3D] rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4"
          onMouseEnter={() => setProjectsHover(true)}
          onMouseLeave={() => setProjectsHover(false)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "clipboard-list" })}
            size="xl"
            style={{ color: "#F4EDD8" }}
            beat={projectsHover}
          />
          <p
            className="ml-4 text-[#F4EDD8] transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            Projects
          </p>
        </div>
        {/* Settings */}
        <div
          className="w-72 h-12 bg-[#022A3D] rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4"
          onMouseEnter={() => setSettingsHover(true)}
          onMouseLeave={() => setSettingsHover(false)}
        >
          <FontAwesomeIcon
            icon={icon({ name: "gear" })}
            size="xl"
            style={{ color: "#F4EDD8" }}
            beat={settingsHover}
          />
          <p
            className="ml-4 text-[#F4EDD8] transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            Settings
          </p>
        </div>
        {/* Logout */}
        <div className="w-72 h-12 bg-[#022A3D] rounded-full transition-all duration-500 hover:bg-gray-700 flex flex-row justify-start items-center px-4">
          <FontAwesomeIcon
            icon={icon({ name: "sign-out-alt" })}
            size="xl"
            style={{ color: "#F4EDD8" }}
          />
          <a
            href="/login"
            className="ml-4 text-[#F4EDD8] transition-all duration-500 hover:text-gray-100"
            style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
          >
            <p
              className="ml-4 text-[#F4EDD8] transition-all duration-500 hover:text-gray-100"
              style={{ fontSize: "1.2rem", fontFamily: "Varela Round" }}
            >
              Logout
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuRight;
