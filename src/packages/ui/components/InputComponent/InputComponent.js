import styled from "styled-components";
import { Theme } from "../ThemeComponent/Theme";

const Wrapper = styled.div``;

const Input = styled.input`
  outline: "none";
  border: 1px solid ${Theme.color.cta};
  border-radius: "10px";
  padding: "5px 0";
  background: "none";
`;

const Label = styled.label`
  cursor: pointer;
`;

export const InputComponent = (props) => {
  return (
    <Wrapper>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        id={props.name}
        type={props.type}
        onChange={props.onChange}
        onClick={props.onClick}
        value={props.value}
      />
    </Wrapper>
  );
};
