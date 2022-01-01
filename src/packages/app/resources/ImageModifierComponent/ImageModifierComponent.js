import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImageComponent, Theme } from "../../../ui";
import Navbar from "./assets/Navbar";
import { SidebarModifier } from "./assets/SidebarModifier";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: ${({ headerHeight }) => `${headerHeight}px`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  max-height: ${({ headerHeight }) => `calc(100% - ${headerHeight}px)`};
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputsWrapper = styled.aside`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 380px;
  max-width: 100%;
  overflow-y: auto;
  border-left: 1px ${Theme.color.black} solid;
`;

export const ImageModifierComponent = ({ img, imgTitle }) => {
  const headerHeight = 50;

  const [hueRange, setHueRange] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [saturate, setSaturate] = useState(50);
  const [invert, setInvert] = useState(0);
  const [contrast, setContrast] = useState(100);

  const filterList = [
    {
      type: "brightness",
      typeName: "Luce",
      iconName: "BRIGHTNESS",
      value: brightness,
      setValue: setBrightness,
      min: 0,
      max: 100,
    },
    {
      type: "hue-rotate",
      typeName: "Colore",
      iconName: "HUE",
      value: hueRange,
      setValue: setHueRange,
      min: 0,
      max: 360,
    },
    {
      type: "grayscale",
      typeName: "Bianco e nero",
      iconName: "B&W",
      value: grayscale,
      setValue: setGrayscale,
      min: 0,
      max: 100,
    },
    {
      type: "saturate",
      typeName: "Saturazione",
      iconName: "SATURATION",
      value: saturate,
      setValue: setSaturate,
      min: 0,
      max: 100,
    },
    {
      type: "invert",
      typeName: "Inverti",
      iconName: "CONTRAST",
      value: invert,
      setValue: setInvert,
      min: 0,
      max: 100,
    },
    {
      type: "contrast",
      typeName: "Contrasto",
      iconName: "INVERT",
      value: contrast,
      setValue: setContrast,
      min: 20,
      max: 200,
    },
  ];

  return (
    <Wrapper>
      <Header headerHeight={headerHeight}>
        <Navbar downloadLink={img} imgTitle={imgTitle} />
      </Header>
      <Body headerHeight={headerHeight}>
        <ImageWrapper>
          <ImageComponent src={img} filterList={filterList} />
        </ImageWrapper>
        <InputsWrapper>
          <SidebarModifier src={img} filterList={filterList} />
        </InputsWrapper>
      </Body>
    </Wrapper>
  );
};
