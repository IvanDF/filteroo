import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Image = styled.img``;

export const ImageModifierComponent = (props) => {
  // const [imageUploaded, setImageUploaded] = useState(false);
  return (
    <Wrapper>
      <Image src={props.img} />
    </Wrapper>
  );
};
