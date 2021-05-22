import React from "react";
import styled from "styled-components";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import { Rgba } from "../RgbaComponent/Rgba";
import { Theme } from "../ThemeComponent/Theme";

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
  img {
    width: 20%;
    object-fit: cover;
    &:nth-child(1) {
      filter: grayscale(16%);
    }
    &:nth-child(2) {
      filter: grayscale(32%);
    }
    &:nth-child(3) {
      filter: grayscale(48%);
    }
    &:nth-child(4) {
      filter: grayscale(64%);
    }
    &:nth-child(5) {
      filter: grayscale(80%);
    }
  }
`;

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: none;
  appearance: none;
  &::-moz-range-thumb {
    appearance: none;
    border: none;
    width: 5px;
    height: 40px;
    border-radius: 25px;
    background: ${Rgba(Theme.color.cta, Theme.opacity.o9)};
    box-shadow: 0px 4px 4px ${Rgba(Theme.color.bg, Theme.opacity.o5)};
    cursor: move;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    border: none;
    width: 5px;
    height: 40px;
    border-radius: 25px;
    background: ${Rgba(Theme.color.cta, Theme.opacity.o9)};
    box-shadow: 0px 4px 4px ${Rgba(Theme.color.bg, Theme.opacity.o5)};
    cursor: move;
  }
`;

export const InputRangeComponent = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageComponent
          src="https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188_1280.jpg"
          alt="Ciao"
        />
        <ImageComponent
          src="https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188_1280.jpg"
          alt="Ciao"
        />
        <ImageComponent
          src="https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188_1280.jpg"
          alt="Ciao"
        />
        <ImageComponent
          src="https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188_1280.jpg"
          alt="Ciao"
        />
        <ImageComponent
          src="https://cdn.pixabay.com/photo/2021/01/09/12/28/tulips-5902188_1280.jpg"
          alt="Ciao"
        />
      </ImageWrapper>
      <Input type="range" />
    </Wrapper>
  );
};
