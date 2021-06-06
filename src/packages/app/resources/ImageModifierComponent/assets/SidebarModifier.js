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
`;

export const SidebarModifier = (props) => {
  const changeValueHandler = (e, value) => {
    value(e);
  };

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
        {props.filterList.map((el, i) => {
          return (
            <DropdownComponent
              typeName={el.typeName}
              iconName={el.iconName}
              key={i}
            >
              <InputRangeComponent
                type={el.type}
                img={props.src}
                min={el.min}
                max={el.max}
                onChange={(e) => {
                  changeValueHandler(e.target.value, el.setValue);
                }}
              />
            </DropdownComponent>
          );
        })}
      </Body>
    </Wrapper>
  );
};
