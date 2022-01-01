import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ButtonComponent,
  IconComponent,
  InputComponent,
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
  input {
    flex-grow: 1;
    padding: 0 20px;
  }
`;

const Download = styled.a`
  text-decoration: none;
`;

const Navbar = ({ downloadLink, imgTitle }) => {
  const splitExtension = imgTitle.split(".", 1);
  const [imageTitle, setImageTitle] = useState(splitExtension);

  useEffect(() => {
    imageTitle && (document.title = imageTitle);
  }, [imageTitle]);

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
      <InputComponent
        center={true}
        styleNone={true}
        value={imageTitle}
        placeholder={"Inserisci Nome immagine"}
        onChange={(e) => {
          setImageTitle(e.target.value);
        }}
      />
      <Download href={downloadLink} download={imageTitle}>
        <ButtonComponent
          color={Theme.color.bg}
          bgColor={Theme.color.cta}
          isUpper={true}
          isDisabled={imageTitle.length === 0}
        >
          Scarica
        </ButtonComponent>
      </Download>
    </Nav>
  );
};

export default Navbar;
