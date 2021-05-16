import React from "react";

export const Prova = (props) => {
  return (
    <div>
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
