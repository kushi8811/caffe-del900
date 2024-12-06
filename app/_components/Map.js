"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map with latitude, longitude, and zoom level
    const map = L.map(mapRef.current, {
      center: [43.7712167, 11.2472393], // Center the map on Caffe del 900
      zoom: 17, // Starting zoom level
      maxZoom: 19, // Allowing zoom up to level 19
      minZoom: 13, // Set the minimum zoom level
    });

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19, // Maximum zoom
    }).addTo(map);

    // Use the default marker icon and set the iconUrl
    const defaultIcon = L.icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // URL of the default icon
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Shadow image for the marker
      iconSize: [25, 41], // Size of the marker
      iconAnchor: [12, 41], // The point of the marker that will be anchored at the position
    });

    // Add marker to the map
    L.marker([43.7712167, 11.2472393], { icon: defaultIcon })
      .addTo(map)
      .bindPopup("Caffe del 900 is here! ☕")
      .openPopup();

    // Cleanup function to remove the map on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg border border-gray-300"
    />
  );
}
