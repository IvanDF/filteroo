import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../ui";
import { ImageModifierComponent, ImageUploaderComponent } from "./resources";

const AppWrapper = styled.main`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${Theme.color.bg};
`;

const App = () => {
  const [isimageUploaded, setIsImageUploaded] = useState(false);
  const [imageUpload, setImageUpload] = useState("");
  const [imageTitle, setImageTitle] = useState("");

  let ImageHandler = (e) => {
    if (e) {
      e && setIsImageUploaded(!isimageUploaded);
      let image = e.target.files[0];
      let img = URL.createObjectURL(image);
      setImageUpload(img);
      setImageTitle(image.name);
    }
  };

  return (
    <AppWrapper>
      {isimageUploaded ? (
        <ImageModifierComponent img={imageUpload} imgTitle={imageTitle} />
      ) : (
        <ImageUploaderComponent change={ImageHandler} />
      )}
    </AppWrapper>
  );
};

export default App;
