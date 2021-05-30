import React, { useState } from "react";
import styled from "styled-components";
import { ImageModifierComponent, ImageUploaderComponent } from "./resources";

const AppWrapper = styled.main`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageUpload, setImageUpload] = useState("");

  let ImageHandler = (e) => {
    if (e) {
      e && setImageUploaded(!imageUploaded);
      let image = e.target.files[0];
      let img = URL.createObjectURL(image);
      setImageUpload(img);
    }
  };

  return (
    <AppWrapper>
      {imageUploaded ? (
        <ImageModifierComponent img={imageUpload} />
      ) : (
        <ImageUploaderComponent change={ImageHandler} />
      )}
    </AppWrapper>
  );
};

export default App;
