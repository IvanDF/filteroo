import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: ${({ filter }) =>
    filter &&
    filter.map((el) => {
      return `${el.type}(${el.value}${
        el.type === "hue-rotate" ? "deg)" : "%)"
      } `;
    })};
`;

export const ImageComponent = (props) => {
  return <Image src={props.src} filter={props.filterList} alt={props.alt} />;
};
