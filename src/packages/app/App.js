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
  return (
    <AppWrapper>
      {imageUploaded ? <ImageModifierComponent /> : <ImageUploaderComponent />}
    </AppWrapper>
  );
};

export default App;
