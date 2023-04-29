import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MapScreen from "../screens/MapScreen";
import MenuRight from "./MenuRight";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <MapScreen />
      {/* <div className="h-screen w-screen overflow-y-scroll my-0">
        <Outlet />
      </div> */}
      <MenuRight />
    </div>
  );
}

export default Layout;
