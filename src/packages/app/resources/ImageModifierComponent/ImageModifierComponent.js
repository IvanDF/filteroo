import React from "react";
import styled from "styled-components";
import Navbar from "./assets/Navbar";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: ${({ headerHeight }) => `calc(100% - ${headerHeight}px)`};
  width: 100%;
  display: flex;
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

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const InputsWrapper = styled.aside`
  height: 100%;
  width: 250px;
  max-width: 100%;
`;

export const ImageModifierComponent = (props) => {
  const headerHeight = 50;
  return (
    <Wrapper>
      <Header headerHeight={headerHeight}>
        <Navbar download={props.img} />
      </Header>
      <Body headerHeight={headerHeight}>
        <ImageWrapper>
          <Image src={props.img} />
        </ImageWrapper>
        <InputsWrapper></InputsWrapper>
      </Body>
    </Wrapper>
  );
};
