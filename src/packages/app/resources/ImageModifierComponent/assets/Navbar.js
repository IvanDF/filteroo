import React /*, { useState } */ from "react";
import styled from "styled-components";
import {
  // ButtonComponent,
  IconComponent,
  // InputComponent,
  Theme,
} from "../../../../ui";

const Nav = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  border-bottom: 1px solid ${Theme.color.black};
  svg {
    cursor: pointer;
  }
`;

// const Download = styled.a`
//   text-decoration: none;
// `;

const Navbar = (props) => {
  // const [imageTitle, setImageTitle] = useState();

  return (
    <Nav>
      <IconComponent
        name="EXIT"
        width={18}
        height={18}
        primaryColor={Theme.color.danger}
        secondaryColor={Theme.color.bg}
        onClick={() => window.location.reload()}
      />
      {/* <InputComponent
        center={true}
        styleNone={true}
        placeholder={"Inserisci Nome immagine"}
        onChange={(e) => {
          setImageTitle(e.target.value);
        }}
      />
      <Download href={props.download} download={imageTitle}>
        <ButtonComponent
          color={Theme.color.bg}
          bgColor={Theme.color.cta}
          isUpper={true}
        >
          Scarica
        </ButtonComponent>
      </Download> */}
    </Nav>
  );
};

export default Navbar;
