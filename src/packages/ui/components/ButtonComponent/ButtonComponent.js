import styled from "styled-components";
import { Theme } from "../../index";
import { Rgba } from "../RgbaComponent/Rgba";

const Button = styled.button`
  color: ${Rgba(Theme.color.bg, Theme.opacity.o5)};
  background: ${({ bgColor }) => (bgColor ? bgColor : Theme.color.cta)};
  padding: 5px 20px;
  border: none;
  ${({ fullWidth }) => fullWidth && "width: 100%"};
  border-radius: 10px;
  font-size: ${Theme.font.s14};
  font-weight: ${Theme.font.w700};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 200ms ease;
  ${({ disabled }) =>
    !disabled &&
    `
  &:hover {
    color: ${Theme.color.bg};
    box-shadow: inset 0px 0px 15px ${Rgba(Theme.color.bg, Theme.opacity.o2)};
  }
  `}
`;

export const ButtonComponent = (props) => {
  return (
    <Button
      color={props.color}
      uppercase={props.isUpper}
      bgColor={props.bgColor}
      disabled={props.isDisabled && true}
      fullWidth={props.isFullWidth && true}
    >
      {props.children}
    </Button>
  );
};
