'use client';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';

const MAP_STYLE =
  process.env.NEXT_PUBLIC_MAP_STYLE ??
  'https://api.maptiler.com/maps/basic-v2-dark/style.json?key=' +
    process.env.NEXT_PUBLIC_MAPTILER_KEY;

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false); // guard for dev re-mounts

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [-77.187, 38.789],
      zoom: 11,
      logoPosition: 'bottom-right',
    });

    // ⓘ icon-style attribution
    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      'bottom-right'
    );

    // marker
    new maplibregl.Marker().setLngLat([-77.187, 38.789]).addTo(map);

    return () => {
      map.remove();
      initialized.current = false;
    };
  }, []);

  // Map fills the card; overlay fades bottom into page
  return (
    <div className="relative card overflow-hidden h-60">
      <div ref={containerRef} className="absolute inset-0" />
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 h-16
          bg-[linear-gradient(transparent,#9d9da200_60%,#fafafa)]
          dark:bg-[linear-gradient(transparent,#18181b73_60%,#0a0a0a)]
        "
      />
    </div>
  );
}
