import { getChildren, getChildrenText } from "@utils/tools";
import React from "react";
import { Container, Title } from "./styles";

interface Props {
  children: React.ReactNode;
  isSetting?: boolean;
}

export function Header({ children, isSetting = false }: Props) {
  const text = `${getChildrenText(children)}`;
  const other = getChildren(children, "===:2").filter(
    (child) => typeof child !== "string"
  );

  return !isSetting ? (
    <Container isSetting={isSetting}>{children}</Container>
  ) : (
    <Container isSetting={isSetting}>
      {other[0]}
      <Title>{text}</Title>
    </Container>
  );
}
