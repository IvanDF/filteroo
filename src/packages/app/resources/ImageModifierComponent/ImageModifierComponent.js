import React, { useState } from "react";
import styled from "styled-components";
import { ImageComponent } from "../../../ui";

const Wrapper = styled.div``;

export const ImageModifierComponent = () => {
  const [imageUploaded, setImageUploaded] = useState(false);
  return (
    <Wrapper>{imageUploaded ? <div>uploaded</div> : <div>upload</div>}</Wrapper>
  );
};
