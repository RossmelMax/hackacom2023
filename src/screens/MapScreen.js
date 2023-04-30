import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import BaseForm from "../components/BaseForm";

// resolve Leaflet's default icon path
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
// end resolve

export default function MapScreen({
  selectedMarkers,
  setSelectedMarkers,
  selectedCategory,
}) {
  const position = [-17.3697, -66.1653];
  const [markerPosition, setMarkerPosition] = useState(position);

  const [markers, setMarkers] = useState(selectedMarkers);

  const [showForm, setShowForm] = useState(false);

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
        icon={
          new L.Icon({
            iconUrl: require("../assets/pin-black.png"),
            iconAnchor: [5, 55],
            popupAnchor: [15, -50],
            iconSize: [40, 40],
          })
        }
      >
        <Popup>
          <p className="text-center">
            Arrastra el marcador a la ubicación del reporte
          </p>

          <div className="flex flex-row justify-center items-center">
            <button
              className={`w-20 h-8 rounded-full text-white font-bold`}
              style={{
                outline: "none",
                backgroundColor:
                  selectedCategory === "medioambiente"
                    ? "#00BA35"
                    : selectedCategory === "abandonoanimal"
                    ? "#964B00"
                    : selectedCategory === "revitalizacionurbana"
                    ? "#FFA500"
                    : selectedCategory === "controversiasocial"
                    ? "#FF0000"
                    : "#000000",
              }}
              onClick={() => {
                setShowForm(true);
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
          icon={
            new L.Icon({
              iconUrl:
                selectedCategory === "medioambiente"
                  ? require("../assets/pin-green.png")
                  : selectedCategory === "abandonoanimal"
                  ? require("../assets/pin-brown.png")
                  : selectedCategory === "revitalizacionurbana"
                  ? require("../assets/pin-orange.png")
                  : selectedCategory === "controversiasocial"
                  ? require("../assets/pin-red.png")
                  : require("../assets/pin-black.png"),

              iconAnchor: [5, 55],
              popupAnchor: [15, -50],
              iconSize: [40, 40],
            })
          }
        >
          <Popup>
            <p className="text-center text-sm font-bold">{marker.title}</p>
            <p className="text-center text-xs">{marker.description}</p>
          </Popup>
        </Marker>
      ))}

      <BaseForm
        latitude={markerPosition[0]}
        longitude={markerPosition[1]}
        setNewMarker={setSelectedMarkers}
        oldMarker={selectedMarkers}
        open={showForm}
        setOpen={setShowForm}
        selectedCategory={selectedCategory}
      />
    </MapContainer>
  );
}
