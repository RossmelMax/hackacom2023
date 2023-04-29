import Sidebar from "./Sidebar";
import MapScreen from "../screens/MapScreen";
import MenuRight from "./MenuRight";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <MapScreen />
      <MenuRight />
    </div>
  );
}

export default Layout;
