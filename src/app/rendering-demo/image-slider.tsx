"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-gray-100 rounded-lg text-center text-gray-400">
        Loading slider...
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow">
      <Slider {...settings}>
        <div className="p-8 text-center bg-blue-500 text-white rounded">
          <h3>Slide 1 - High Performance</h3>
        </div>
        <div className="p-8 text-center bg-emerald-500 text-white rounded">
          <h3>Slide 2 - App Router Ready</h3>
        </div>
        <div className="p-8 text-center bg-purple-500 text-white rounded">
          <h3>Slide 3 - Server & Client Composed</h3>
        </div>
      </Slider>
    </div>
  );
}