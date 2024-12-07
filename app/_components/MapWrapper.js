"use client";

import dynamic from "next/dynamic";

// Dynamically import the Map component
const Map = dynamic(() => import("./Map"), { ssr: false });

export default function MapClientWrapper() {
  return <Map />;
}
