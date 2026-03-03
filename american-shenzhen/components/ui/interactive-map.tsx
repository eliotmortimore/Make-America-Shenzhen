"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
// We must import Leaflet dynamically or ensure it's only used in client
import L from "leaflet";

interface Company {
  name: string;
  tier: "Foundations" | "Accelerators" | "Enablers";
  location?: string;
  industry: string;
  url: string;
  coords?: [number, number];
}

interface MapProps {
  companies: Company[];
  hoveredCompany: string | null;
  onHover: (name: string | null) => void;
}

const TIER_COLORS = {
  Foundations: "#3b82f6", // blue-500
  Accelerators: "#a855f7", // purple-500
  Enablers: "#f97316",    // orange-500
};

export default function InteractiveMap({ companies, hoveredCompany, onHover }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Fix icons
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    const map = L.map(mapContainerRef.current, {
      center: [39.8283, -98.5795],
      zoom: 4,
      scrollWheelZoom: true,
      zoomControl: false,
      attributionControl: false
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    markersLayerRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    companies.forEach(comp => {
      if (!comp.coords) return;

      const isHovered = hoveredCompany === comp.name;
      const color = TIER_COLORS[comp.tier];

      // Create custom icon
      const icon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background-color: ${color};
          width: ${isHovered ? "24px" : "12px"};
          height: ${isHovered ? "24px" : "12px"};
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 ${isHovered ? "15px" : "0px"} ${color};
          transition: all 0.3s ease;
        "></div>`,
        iconSize: [isHovered ? 24 : 12, isHovered ? 24 : 12],
        iconAnchor: [isHovered ? 12 : 6, isHovered ? 12 : 6],
        popupAnchor: [0, -10],
      });

      const marker = L.marker(comp.coords as L.LatLngExpression, { 
        icon,
        zIndexOffset: isHovered ? 1000 : 0
      });

      // Bind interactions
      marker.on('mouseover', () => {
        onHover(comp.name);
        marker.openPopup();
      });
      marker.on('mouseout', () => {
        // Only close if we moved out to something else? Leaflet handles this naturally.
        // We might want to keep it open if hoveredCompany is still set, but for now simple is better.
        onHover(null);
        marker.closePopup();
      });
      marker.on('click', () => {
         if (comp.url) window.open(comp.url, '_blank');
      });

      // Popup Content
      const popupContent = `
        <div class="text-center min-w-[120px]">
          <h3 class="font-bold text-sm mb-0.5" style="color: ${color}">${comp.name}</h3>
          <p class="text-[10px] text-gray-500 uppercase tracking-wider">${comp.location}</p>
        </div>
      `;
      marker.bindPopup(popupContent, { 
        className: "custom-popup-dark",
        closeButton: false,
        autoPan: false
      });

      if (isHovered) {
        marker.openPopup();
      }

      markersLayer.addLayer(marker);
    });

  }, [companies, hoveredCompany, onHover]);

  // Handle FlyTo
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !hoveredCompany) return;

    const company = companies.find(c => c.name === hoveredCompany);
    if (company && company.coords) {
      map.flyTo(company.coords as L.LatLngExpression, 6, {
        animate: true,
        duration: 1.5
      });
    }
  }, [hoveredCompany, companies]);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ height: "100%", width: "100%", background: "#111" }} 
      className="z-0"
    />
  );
}
