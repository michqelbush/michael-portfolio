'use client';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';

const MAP_STYLE =
  process.env.NEXT_PUBLIC_MAP_STYLE ??
  'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=' +
    process.env.NEXT_PUBLIC_MAPTILER_KEY;

export default function LocationMap() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new maplibregl.Map({
      container: ref.current,
      style: MAP_STYLE,               // Basic v2 Dark (MapTiler)
      center: [-77.187, 38.789],      // Springfield, VA
      zoom: 11,
    });

    //map.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.addControl(
      new maplibregl.AttributionControl({ compact: false }),
      'bottom-right'
    );

    // marker in the center
    new maplibregl.Marker()
      .setLngLat([-77.187, 38.789])
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div className="card overflow-hidden h-60" ref={ref} />;
}
