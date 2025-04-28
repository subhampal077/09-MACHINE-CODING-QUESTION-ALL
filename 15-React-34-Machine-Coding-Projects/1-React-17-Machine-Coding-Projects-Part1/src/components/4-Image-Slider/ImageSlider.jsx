// APi link : https://picsum.photos/v2/list?page=1&limit=10

import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setLoading(false);
      });
  }, []);

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return loading ? (
    <div className="text-2xl font-semibold">Loading Data...</div>
  ) : errorMsg !== null ? (
    <div className="text-2xl font-semibold">
      Something went wrong. {errorMsg}
    </div>
  ) : (
    <div className="my-5 mx-auto overflow-hidden w-[480px] h-[320px] relative">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="absolute top-40 left-2 text-yellow-400"
        size={30}
      />
      
      {images?.map((image, i) => (
        <img
          key={i}
          className={`rounded-md w-full ${
            currentSlide === i ? "block" : "hidden"
          }`}
          src={image.download_url}
          alt=""
        />
      ))}
      
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute top-40 right-2 text-yellow-400"
        size={30}
      />
      
      <span className="absolute flex gap-2 cursor-pointer top-72 left-36">
        {images?.map((item, i) => (
          <button
            onClick={() => setCurrentSlide(i)}
            key={i}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
