import styled from "styled-components";
import { Rgba } from "../RgbaComponent/Rgba";
import { Theme } from "../ThemeComponent/Theme";

const Wrapper = styled.div``;

const Input = styled.input`
  outline: none;
  border: 1px solid ${Theme.color.cta};
  border-radius: 10px;
  padding: 5px 0;
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: ${Theme.color.cta};
  &::placeholder {
    color: ${Rgba(Theme.color.cta, Theme.opacity.o5)};
  }
  ${({ styleNone }) =>
    styleNone &&
    `
  background: none;
  border: none;
  outline: none;
  caret-color: ${Theme.color.warning};
  `}
`;

const Label = styled.label`
  cursor: pointer;
`;

export const InputComponent = (props) => {
  return (
    <Wrapper>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        center={props.center}
        styleNone={props.styleNone}
        id={props.name}
        type={props.type}
        onChange={props.onChange}
        onClick={props.onClick}
        value={props.value}
        accept={props.accept}
        placeholder={props.placeholder}
      />
    </Wrapper>
  );
};
