import React from "react";
import "./gallery.css";
import MainHead from "../mainHead";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { galleryData } from "../../data";

const Gallery = () => {
  return (
    <>
      <MainHead classNames="GalleryContainer" title="OUR GALLERY" />

      <ImageList
        className="galleryContent"
        variant="woven"
        cols={3}
        gap={8}
      >
        {galleryData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Gallery;
