import React, { useState } from "react";
import styled from "styled-components";
import {
  IconComponent,
  Rgba,
  InputRangeComponent,
  TypographyComponent,
} from "../../index";
import { Theme } from "../ThemeComponent/Theme";

const Wrapper = styled.div`
  display: flex;
  background: ${Theme.color.bg};
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const IconWrapper = styled.div`
  padding-right: 10px;
  cursor: pointer;
  svg {
    position: relative;
    top: 2px;
    transition: transform ${Theme.transition.bouncing} 250ms;
    ${({ isOpen }) => isOpen && "transform: rotate(90deg)"}
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  svg {
    margin-right: 10px;
  }
`;

const DropdownBody = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ isOpen }) => isOpen && "5px 0"};
  height: ${({ isOpen }) => (isOpen ? "50px" : "0")};
  transition: height ${Theme.transition.bouncing} 250ms;
  overflow: hidden;
`;

const DropdownUndo = styled.div`
  // SE C'È UNA MODIFICA DIVENTA CLICCABILE
  svg {
    fill: ${Rgba(Theme.color.cta, Theme.opacity.o5)};
    position: relative;
    top: 3px;
  }
`;

export const DropdownComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <IconWrapper isOpen={isOpen} onClick={isOpenHandler}>
        <IconComponent
          name="CHEVRON"
          height={14}
          width={14}
          primaryColor={Theme.color.primary}
        />
      </IconWrapper>
      <Dropdown>
        <DropdownHeader>
          <DropdownTitle onClick={isOpenHandler}>
            <IconComponent
              name="BRIGHTNESS"
              height={14}
              width={14}
              primaryColor={Theme.color.primary}
            />
            <TypographyComponent
              color={Theme.color.primary}
              fontSize={Theme.font.s14}
            >
              {props.typeName}
            </TypographyComponent>
          </DropdownTitle>
          <DropdownUndo>
            <IconComponent name="UNDO" height={14} width={14}></IconComponent>
          </DropdownUndo>
        </DropdownHeader>
        <DropdownBody isOpen={isOpen}>{props.children}</DropdownBody>
      </Dropdown>
    </Wrapper>
  );
};
