import styled from "styled-components";
import { useState } from "react";
import {
  TypographyComponent,
  InputComponent,
  IconComponent,
  Theme,
} from "../../../ui";
import { Rgba } from "../../../../../../../Documents/filteroo/src/packages/ui";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: ${Theme.color.bg};
  color: ${Theme.color.primary};
  input {
    opacity: ${Theme.opacity.o0};
  }
`;

const LabelWrapper = styled.div`
  padding: 100px 150px;
  border: 5px dashed ${Rgba(Theme.color.primary, Theme.opacity.o8)};
  border-radius: 60px;
`;

export const ImageUploaderComponent = () => {
  const [imageUpload, setImageUpload] = useState("");
  let imageHandler = (e) => {
    let image = e.target.files[0];
    let img = URL.createObjectURL(image);
    setImageUpload(img);
    console.log(img);
  };

  return (
    <Wrapper>
      <InputComponent
        name="imageUploader"
        type="file"
        onChange={imageHandler}
        opacity={Theme.opacity.o0}
        label={
          <LabelWrapper>
            <IconComponent
              name={"ADD_IMAGE"}
              width={130}
              height={130}
              primaryColor={Theme.color.primary}
            />
            <TypographyComponent
              color={Theme.color.warnng}
              colorHovered={Theme.color.whithe}
              fontSize={Theme.font.s36}
              fontWeight={Theme.font.w700}
              pointer={true}
            >
              Carica un'immagine
            </TypographyComponent>
          </LabelWrapper>
        }
      />
    </Wrapper>
  );
};
