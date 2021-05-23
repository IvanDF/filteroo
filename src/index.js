import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ProvaModificatore } from "./packages/provaModificatore";
import { TypographyComponent } from "./packages/ui/components/TypographyComponent/TypographyComponent";
import {
  ButtonComponent,
  DropdownComponent,
  IconComponent,
  Theme,
} from "./packages/ui/index";

const Title = styled.div`
  display: block;
  background-color: red;
`;
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    // RESET STYLES
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // SETTING GLOBAL FONT
    font-family: 'KoHo', monospace;
    font-size: 16px;
    font-weight: 400;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <DropdownComponent></DropdownComponent>
    <Title>Ciao</Title>
    <IconComponent
      name="B&W"
      width={24}
      height={24}
      primaryColor={Theme.color.black}
      // secondaryColor="black"
    />
    <TypographyComponent
      color={Theme.color.danger}
      fontSize={Theme.font.s36}
      fontWeight={Theme.font.w700}
      margin={[0, 4, 2, 1]}
    >
      SPEREM
    </TypographyComponent>
    <ButtonComponent bgColor={Theme.color.warnng} isUpper={true}>
      scarica
    </ButtonComponent>
    <ProvaModificatore />
  </React.StrictMode>,
  document.getElementById("root")
);
