import React from "react";
import { getChildrenText } from "@utils/tools";
import { TouchableOpacityProps } from "react-native";
import { ButtonVariant, Container, LoadingCircle, Title } from "./styles";
import { BackIcon } from "@components/Icon";

interface Props extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
  full?: boolean;
}

export function Button({ variant, children, isLoading, full, ...rest }: Props) {
  const text = getChildrenText(children);

  return !isLoading ? (
    <Container full={full} variant={variant} {...rest}>
      {variant === "action" && <BackIcon />}
      <Title variant={variant}>{text}</Title>
    </Container>
  ) : (
    <Container full={full} variant={variant} {...rest} disabled={isLoading}>
      <LoadingCircle />
    </Container>
  );
}
