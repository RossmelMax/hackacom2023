import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// resolve Leaflet's default icon path
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
// end resolve

export default function MapScreen({ selectedMarkers, selectedCategory }) {
  const position = [-17.3697, -66.1653];
  const [markerPosition, setMarkerPosition] = useState(position);

  const [markers, setMarkers] = useState(selectedMarkers);

  useEffect(() => {
    setMarkers(selectedMarkers);
  }, [selectedMarkers]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMarkerPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    console.log("markerPosition", markerPosition);
  }, [markerPosition]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100vh", zIndex: 0 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={markerPosition}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            setMarkerPosition(e.target._latlng);
          },
          mouseover: (e) => {
            e.target.openPopup();
          },
        }}
      >
        <Popup>
          <p className="text-center">
            Arrastra el marcador a la ubicación del reporte
          </p>

          <div className="flex flex-row justify-center items-center">
            <button
              className={`w-20 h-8 bg-${
                selectedCategory === "medioambiente"
                  ? "green-500"
                  : selectedCategory === "abandonoanimal"
                  ? "yellow-500"
                  : selectedCategory === "revitalizacionurbana"
                  ? "blue-500"
                  : selectedCategory === "controversiasocial"
                  ? "red-500"
                  : "gray-500"
              } rounded-full text-white font-bold`}
              onClick={() => {
                alert("Reporte creado");
              }}
            >
              Crear
            </button>
          </div>
        </Popup>
      </Marker>

      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
          }}
        >
          <Popup>
            <p className="text-center text-sm font-bold">{marker.title}</p>
            <p className="text-center text-xs">{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
