import React from "react";
import styled from "styled-components";
import {
  DropdownComponent,
  InputRangeComponent,
  Rgba,
  Theme,
  TypographyComponent,
} from "../../../../ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 30px 0 15px;
  padding-bottom: 5px;
  border-bottom: solid ${Rgba(Theme.color.primary, Theme.opacity.o3)} 2px;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  height: ${({ headerHeight }) => `calc(100% - ${headerHeight}px)`};
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
`;

export const SidebarModifier = (props) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <TypographyComponent
          isUpper
          color={Theme.color.primary}
          fontSize={Theme.font.s22}
        >
          Regola
        </TypographyComponent>
      </HeaderWrapper>
      <Body>
        <DropdownComponent typeName="Luce">
          <InputRangeComponent
            img={props.src}
            onChange={(e) => {
              props.setBrightness(e.target.value * 2);
            }}
          />
        </DropdownComponent>
        <DropdownComponent typeName="Colore">
          <InputRangeComponent
            img={props.src}
            onChange={(e) => {
              props.setHueRange(e.target.value);
            }}
          />
        </DropdownComponent>
        <DropdownComponent typeName="Scala di grigi">
          <InputRangeComponent
            img={props.src}
            onChange={(e) => {
              props.setGrayscaleRange(e.target.value);
            }}
          />
        </DropdownComponent>
      </Body>
    </Wrapper>
  );
};
