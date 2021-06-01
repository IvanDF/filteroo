import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  TypographyComponent,
  InputComponent,
  IconComponent,
  Theme,
} from "../../../ui";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${Theme.color.primary};
  input {
    opacity: ${Theme.opacity.o0};
  }
`;

const LabelWrapper = styled.div`
  padding: 120px 170px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='60' ry='60' stroke='%23EAE2B7FF' stroke-width='8' stroke-dasharray='30%2c 30' stroke-dashoffset='36' stroke-miterlimit='1' stroke-linecap='square' stroke-linejoin='round' /%3e%3c/svg%3e");
  border-radius: 60px;
  opacity: ${Theme.opacity.o5};
  transition: transform 350ms ${Theme.transition.bouncing}, opacity 250ms ease;
  transform: scale(0.9, 0.9);
  &:hover {
    opacity: ${Theme.opacity.o9};
    transform: scale(1, 1);
  }
  svg {
    margin-bottom: 15px;
  }
`;

export const ImageUploaderComponent = (props) => {
  const [imageUpload, setImageUpload] = useState("");
  let imageHandler = (e) => {
    setImageUpload(e);
  };

  useEffect(() => {
    props.change(imageUpload);
  }, [props, imageUpload]);

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
              fontSize={Theme.font.s32}
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
