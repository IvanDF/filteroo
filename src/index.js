import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IconComponent, Theme } from "./packages/ui/index";

const Title = styled.div`
  display: block;
  background-color: red;
`;

ReactDOM.render(
  <React.StrictMode>
    <Title>Ciao</Title>
    <IconComponent
      name="B&W"
      width={24}
      height={24}
      primaryColor={Theme.colors.beige}
      // secondaryColor="black"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
