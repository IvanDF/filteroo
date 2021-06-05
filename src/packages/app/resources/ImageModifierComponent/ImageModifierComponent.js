import React, { useState } from "react";
import styled from "styled-components";
import { ImageComponent } from "../../../ui";
import Navbar from "./assets/Navbar";
import { SidebarModifier } from "./assets/SidebarModifier";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
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
  /* justify-content: space-between;
  align-items: center; */
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
  width: 450px;
  max-width: 100%;
`;

export const ImageModifierComponent = (props) => {
  const headerHeight = 50;

  const [hueRange, setHueRange] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [grayscaleRange, setGrayscaleRange] = useState(0);

  const filterList = [
    {
      type: "brightness",
      value: brightness,
    },
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
    <Wrapper>
      <Header headerHeight={headerHeight}>
        <Navbar download={props.img} />
      </Header>
      <Body headerHeight={headerHeight}>
        <ImageWrapper>
          <ImageComponent src={props.img} filterList={filterList} />
        </ImageWrapper>
        <InputsWrapper>
          <SidebarModifier
            src={props.img}
            filterList={filterList}
            setBrightness={setBrightness}
            setHueRange={setHueRange}
            setGrayscaleRange={setGrayscaleRange}
          />
        </InputsWrapper>
      </Body>
    </Wrapper>
  );
};
