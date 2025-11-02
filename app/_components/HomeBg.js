"use client";
import { useState, useEffect } from "react";
import bg from "@/public/caffe-images/bg1.jpg";
import Button from "./Button";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

function HomeBg() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [fade, setFade] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push("/booking");
  };
  useEffect(() => {
    let timeout1, timeout2;

    const messages = [
      "Caffe del 900'",
      "Enjoy the Best Brunch in Town",
      "Discover the Art of Coffee",
      "Savor Freshly Baked Croissants",
      "Relax and Unwind with Us",
    ];

    let currentIndex = 0;

    const cycleMessages = () => {
      setFade(true);
      timeout1 = setTimeout(() => {
        setMessage(messages[currentIndex]);
        setFade(false);
        currentIndex = (currentIndex + 1) % messages.length;
      }, 1000);
    };

    setMessage(messages[currentIndex]);
    currentIndex++;
    timeout2 = setInterval(cycleMessages, 4000);

    return () => {
      clearTimeout(timeout1);
      clearInterval(timeout2);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = bg.src;
    img.onload = () => setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[700px]">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center h-[700px]"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <h1
          className={`text-white font-semibold text-4xl transition-opacity duration-1000 ${
            fade ? "opacity-0" : "opacity-80"
          }`}
        >
          {message}
        </h1>
        <Button onClick={handleClick}>Book a Table</Button>
      </div>
    </div>
  );
}

export default HomeBg;
