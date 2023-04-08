import { InformativeTag } from "@components/Informative Tag";
import { getChildren, getChildrenText } from "@utils/tools";
import React from "react";
import {
  Container,
  LeftBox,
  RightBox,
  TextBox,
  Title,
  TitleContainer,
} from "./styles";

type Props = {
  ReadStats: string;
  Indicator?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
};

export function CardAction({ ReadStats, children, title, ...rest }: Props) {
  const text = getChildrenText(children, ">:24", 0);

  return (
    <TitleContainer>
      <Container {...rest}>
        <LeftBox>
          {getChildren(children).filter((child) => typeof child !== "string")}
        </LeftBox>
        <RightBox>
          <TextBox>{text}</TextBox>
          <InformativeTag>{ReadStats}</InformativeTag>
        </RightBox>
      </Container>
      <Title>{title}</Title>
    </TitleContainer>
  );
}
