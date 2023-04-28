import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
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

export default function MapScreen() {
  const position = [-17.3697, -66.1653];
  const [markerPosition, setMarkerPosition] = useState(position);

  const [markers, setMarkers] = useState([
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
  ]);

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
      style={{ width: "100%", height: "100vh" }}
    >
      <ZoomControl position="topright" />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={markerPosition}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            setMarkerPosition(e.target._latlng);
          },
        }}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      {markers.map((marker) => (
        <Marker
          key={marker.key}
          position={marker.position}
          eventHandlers={{
            dragend: (e) => {
              console.log(e.target._latlng);
            },
          }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
