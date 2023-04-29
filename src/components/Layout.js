import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="h-screen w-screen overflow-y-scroll my-0">
                <Outlet/>
            </div>
        </div>
    );
  }

  export default Layout;
