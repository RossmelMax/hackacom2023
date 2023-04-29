import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MapScreen from "../screens/MapScreen";
import MenuRight from "./MenuRight";

function Layout() {
  const [selectedCategory, setSelectedCategory] = useState("medioambiente");
  const [selectedMarkers, setSelectedMarkers] = useState([
    {
      position: [-17.387233, -66.150651],
      key: "marker1",
      iconType: "default",
    },
    {
      position: [-17.374199, -66.161868],
      key: "marker2",
      iconType: "red",
    },
    {
      position: [-17.3697, -66.1653],
      key: "marker3",
      iconType: "blue",
    },
    {
      position: [-17.36589, -66.1703],
      key: "marker4",
      iconType: "blue",
    },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <MapScreen />
      <MenuRight />
    </div>
  );
}

export default Layout;
