import styled from "styled-components";

const Text = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const TypographyComponent = (props) => {
  return (
    <Text
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.children}
    </Text>
  );
};
