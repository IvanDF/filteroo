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
      filter: ${({ type }) =>
        `${type}(${type === "hue-rotate" ? "72deg" : "16%"})`};
    }
    &:nth-child(2) {
      filter: ${({ type }) =>
        `${type}(${type === "hue-rotate" ? "144deg" : "32%"})`};
    }
    &:nth-child(3) {
      filter: ${({ type }) =>
        `${type}(${type === "hue-rotate" ? "216deg" : "48%"})`};
    }
    &:nth-child(4) {
      filter: ${({ type }) =>
        `${type}(${type === "hue-rotate" ? "288deg" : "64%"})`};
    }
    &:nth-child(5) {
      filter: ${({ type }) =>
        `${type}(${type === "hue-rotate" ? "360deg" : "80%"})`};
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
      <ImageWrapper type={props.type}>
        <ImageComponent src={props.img} />
        <ImageComponent src={props.img} />
        <ImageComponent src={props.img} />
        <ImageComponent src={props.img} />
        <ImageComponent src={props.img} />
      </ImageWrapper>
      <Input
        type="range"
        onChange={props.onChange}
        min={props.min}
        max={props.max}
      />
    </Wrapper>
  );
};
