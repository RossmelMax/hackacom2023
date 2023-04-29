import "./App.css";
import Map from "./screens/MapScreen";
import MenuRight from "./components/MenuRight";

function App() {
  return (
    <div className="flex-1 h-screen bg-gray-200 flex flex-row">
      <Map />
      <MenuRight />
    </div>
  );
}

export default App;
