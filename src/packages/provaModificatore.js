import React, { useState } from "react";
import { Prova } from "./prova";
import { ImageComponent } from "./ui";

export const ProvaModificatore = (props) => {
  const [hueRange, setHueRange] = useState(0);
  const [grayscaleRange, setGrayscaleRange] = useState(0);
  const filterList = [
    {
      type: "hue-rotate",
      value: hueRange,
    },
    {
      type: "grayscale",
      value: grayscaleRange,
    },
  ];

  return (
    <div>
      <Prova setHueRange={setHueRange} setGrayscaleRange={setGrayscaleRange} />
      <ImageComponent
        filterList={filterList}
        src="https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188_1280.jpg"
        alt="Ciao"
      />
    </div>
  );
};
