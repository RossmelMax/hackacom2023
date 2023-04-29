import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Sidebar() {
  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  const [thirdHover, setThirdHover] = useState(false);
  const [fourthHover, setFourthHover] = useState(false);
  return (
    <div className="h-full fixed top-0 left-0 z-10 flex flex-col justify-start items-start transition-all duration-500 space-y-8 my-8">
      {/* Title */}
      <div className="w-fit h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#022A3D] shadow-lg px-5">
        <p
          className={`text-[#F4EDD8] text-3xl font-bold transition-all duration-500 pr-4`}
          style={{ fontFamily: "Varela Round" }}
        >
          Canasta
        </p>
      </div>

      {/* Medio Ambiente */}
      {firstHover === false ? (
        <div
          className="w-20 h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-green-500 shadow-lg px-5"
          onMouseEnter={() => setFirstHover(true)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 mr-2 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Medio Ambiente
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "leaf" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      ) : (
        <div
          className="w-full h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-green-500 shadow-lg px-5"
          onMouseLeave={() => setFirstHover(false)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Medio Ambiente
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "leaf" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      )}

      {/* Abandono Animal */}
      {secondHover === false ? (
        <div
          className="w-20 h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#FFA500] shadow-lg px-5"
          onMouseEnter={() => setSecondHover(true)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 mr-2 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Abandono Animal
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "dog" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      ) : (
        <div
          className="w-full h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#FFA500] shadow-lg px-5"
          onMouseLeave={() => setSecondHover(false)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Abandono Animal
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "dog" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      )}

      {/* Revitalización Urbana */}
      {thirdHover === false ? (
        <div
          className="w-20 h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#FF0000] shadow-lg px-5"
          onMouseEnter={() => setThirdHover(true)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 mr-2 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Revitalización Urbana
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "tree-city" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      ) : (
        <div
          className="w-full h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#FF0000] shadow-lg px-5"
          onMouseLeave={() => setThirdHover(false)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Revitalización Urbana
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "tree-city" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      )}

      {/* Controversia Social */}
      {fourthHover === false ? (
        <div
          className="w-20 h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#000000] shadow-lg px-5"
          onMouseEnter={() => setFourthHover(true)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 mr-2 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Controversia Social
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "users-rays" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      ) : (
        <div
          className="w-full h-24 rounded-r-full transition-all duration-500 flex flex-row justify-start items-center bg-[#000000] shadow-lg px-5"
          onMouseLeave={() => setFourthHover(false)}
        >
          <p
            className={`text-white text-2xl font-bold transition-all duration-500 pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis`}
          >
            Controversia Social
          </p>
          <FontAwesomeIcon
            icon={icon({ name: "users-rays" })}
            size="2xl"
            style={{ color: "white" }}
            className="ml-auto transition-all duration-500"
          />
        </div>
      )}
    </div>
    // <div className="flex flex-col mt-5 space-y-4 w-0 z-10">
    //   <div className="text-2xl font-bold ml-2 relative">Canasta</div>

    //   <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
    //     <Link
    //       to="m-habiente"
    //       className="flex items-center bg-teal-500 hover:bg-teal-700 font-bold py-5 px-4 rounded-r-full"
    //     >
    //       <span className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
    //         Medio hambiente
    //       </span>
    //       <BsMoisture className="text-white mx-1.5 text-xl min-w-[20px]" />
    //     </Link>
    //   </div>

    //   <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
    //     <Link
    //       to="a-animal"
    //       className="flex items-center bg-green-500 hover:bg-green-700 font-bold py-5 px-4 rounded-r-full"
    //     >
    //       <span className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
    //         Abandono animal
    //       </span>
    //       <BsPiggyBank className="text-white mx-1.5 text-xl min-w-[20px]" />
    //     </Link>
    //   </div>

    //   <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
    //     <Link
    //       to="r-social"
    //       className="flex items-center bg-violet-500 hover:bg-violet-700 font-bold py-5 px-4 rounded-r-full"
    //     >
    //       <span className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
    //         Rehabilitación social
    //       </span>
    //       <BsBuildingFillGear className="text-white mx-1.5 text-xl min-w-[20px]" />
    //     </Link>
    //   </div>

    //   <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
    //     <Link
    //       to="c-social"
    //       className="flex items-center bg-amber-500 hover:bg-amber-700 font-bold py-5 px-4 rounded-r-full"
    //     >
    //       <span className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
    //         Controversia social
    //       </span>
    //       <BsFillPeopleFill className="text-white mx-1.5 text-xl min-w-[20px]" />
    //     </Link>
    //   </div>
    // </div>
  );
}
