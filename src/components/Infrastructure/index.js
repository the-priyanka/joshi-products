import React from "react";
import "./infrastructure.css";
import MainHead from "../MainHead";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { infrastructureData } from "../../data";

const Infrastructure = () => {
  return (
    <>
      <MainHead classNames="infraContainer" title="Infrastructure" />

      <Box className="infraContent">
        <ImageList variant="masonry" cols={3} gap={8}>
          {infrastructureData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Infrastructure;
