import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 80%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const InputsWrapper = styled.div`
  height: 100%;
  width: 20%;
  max-width: 100%;
`;

export const ImageModifierComponent = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={props.img} />
      </ImageWrapper>
      <InputsWrapper></InputsWrapper>
    </Wrapper>
  );
};
