import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensures code only runs in the browser

    const map = L.map(mapRef.current, {
      center: [43.7712167, 11.2472393],
      zoom: 17,
      maxZoom: 19,
      minZoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const defaultIcon = L.icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    L.marker([43.7712167, 11.2472393], { icon: defaultIcon })
      .addTo(map)
      .bindPopup("Caffe del 900 is here! ☕")
      .openPopup();

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg border border-gray-300"
    />
  );
}
