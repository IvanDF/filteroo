import React from "react";
import { InputRangeComponent } from "./ui/components/InputRangeComponent/InputRangeComponent";

export const Prova = (props) => {
  return (
    <div>
      <InputRangeComponent />
      <input
        type="range"
        onChange={(e) => {
          props.setHueRange(e.target.value);
        }}
      />
      <input
        type="range"
        onChange={(e) => {
          props.setGrayscaleRange(e.target.value);
        }}
      />
    </div>
  );
};
