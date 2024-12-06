"use client";
import dynamic from "next/dynamic";
import Footer from "../_components/Footer";
const Map = dynamic(() => import("../_components/Map"), { ssr: false });

function Page() {
  return (
    <div className="bg-primary-700 py-6 px-4 font-serif text-white">
      {/* Main container for centering content */}
      <div className="max-w-full mx-auto relative z-0">
        <h1 className="mb-6 text-xl sm:text-2xl md:text-4xl font-bold px-[110px]">
          Where to find us?
        </h1>

        {/* Map container */}
        <div className="rounded-lg overflow-hidden shadow-lg z-10">
          <Map />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
