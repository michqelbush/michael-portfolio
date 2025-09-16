'use client';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';

const MAP_STYLE =
  process.env.NEXT_PUBLIC_MAP_STYLE ??
  `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`;

export default function LocationMap() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new maplibregl.Map({
      container: ref.current,
      style: MAP_STYLE,               // Basic v2 Dark (MapTiler)
      center: [-77.187, 38.789],      // Springfield, VA
      zoom: 11,
      attributionControl: false,      // turn off the default control (the ⓘ)
    });

    // Add exactly one attribution control (full text)
    map.addControl(
      new maplibregl.AttributionControl({ compact: false }),
      'bottom-right'
    );

    // marker in the center
    new maplibregl.Marker().setLngLat([-77.187, 38.789]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      className="relative overflow-hidden h-60 rounded-2xl map-fade"
      ref={ref}
    />
  );
  
  return <div className="relative card overflow-hidden h-60 map-fade" ref={ref} />;
}
