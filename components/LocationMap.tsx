"use client";

import Map, { Marker } from "react-map-gl";

export default function LocationMap() {
  // Springfield, VA (adjust as you like)
  const latitude = 38.789;
  const longitude = -77.187;

  return (
    <div className="card overflow-hidden h-60">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{ longitude, latitude, zoom: 11 }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        style={{ width: "100%", height: "100%" }}
      >
        {/* The green dot */}
        <Marker longitude={longitude} latitude={latitude} color="lime" />
      </Map>
    </div>
  );
}
