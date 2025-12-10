import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Hero = () => {
  const images = [
    {
      original: "https://i.ibb.co.com/Mkhm8wfX/5858595.jpg",
      thumbnail: "https://i.ibb.co.com/Mkhm8wfX/5858595.jpg",
    },
    {
      original: "https://i.ibb.co.com/4Z9Nxb67/5724079.jpg",
      thumbnail: "https://i.ibb.co.com/4Z9Nxb67/5724079.jpg",
    },
    {
      original:
        "https://i.ibb.co.com/MDfH9N4V/Gemini-Generated-Image-bhjzp7bhjzp7bhjz.png",
      thumbnail:
        "https://i.ibb.co.com/MDfH9N4V/Gemini-Generated-Image-bhjzp7bhjzp7bhjz.png",
    },
    {
      original:
        "https://i.ibb.co.com/Tqx64857/Gemini-Generated-Image-e5mj2ve5mj2ve5mj.png",
      thumbnail:
        "https://i.ibb.co.com/Tqx64857/Gemini-Generated-Image-e5mj2ve5mj2ve5mj.png",
    },
  ];
  return (
    <div className="w-full md:h-[95vh]  mx-auto py-5">
      <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={2000}
        showPlayButton={false}
        showFullscreenButton={true}
        renderItem={(item) => (
          <img
            src={item.original}
            alt=""
            className="w-full md:h-[85vh] object-cover"
          />
        )}
      />
    </div>
  );
};

export default Hero;
