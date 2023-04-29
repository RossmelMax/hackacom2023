import { Link } from "react-router-dom";
import { 
  BsMoisture,
  BsBuildingFillGear,
  BsFillPeopleFill,
  BsPiggyBank
} from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="flex flex-col mt-5 space-y-4 w-0">

      <div className="text-2xl font-bold ml-2 relative">
        Canasta
      </div>

      <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
        <Link
          to="m-habiente"
          className="flex items-center bg-teal-500 hover:bg-teal-700 font-bold py-5 px-4 rounded-r-full"
        >
          <span
            className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
            Medio hambiente
          </span>
          <BsMoisture className="text-white mx-1.5 text-xl min-w-[20px]"/>
        </Link>
      </div>
      
      <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
        <Link
          to="a-animal"
          className="flex items-center bg-green-500 hover:bg-green-700 font-bold py-5 px-4 rounded-r-full"
        >
          <span
            className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
            Abandono animal
          </span>
          <BsPiggyBank className="text-white mx-1.5 text-xl min-w-[20px]"/>
        </Link>
      </div>

      <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
        <Link
          to="r-social"
          className="flex items-center bg-violet-500 hover:bg-violet-700 font-bold py-5 px-4 rounded-r-full"
        >
          <span
            className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
            Rehabilitación social
          </span>
          <BsBuildingFillGear className="text-white mx-1.5 text-xl min-w-[20px]"/>
        </Link>
      </div>

      <div className="transition-all w-fit -translate-x-3/4 relative group hover:translate-x-0 duration-300">
        <Link
          to="c-social"
          className="flex items-center bg-amber-500 hover:bg-amber-700 font-bold py-5 px-4 rounded-r-full"
        >
          <span
            className="text-gray-100 transition-[] whitespace-nowrap invisible group-hover:visible duration-4000">
            Controversia social
          </span>
          <BsFillPeopleFill className="text-white mx-1.5 text-xl min-w-[20px]"/>
        </Link>
      </div>
    </div>
  );
}