import { getChildren, getChildrenText } from "@utils/tools";
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
import { Container, OtherContainer, Title } from "./styles";

export type Props = {
  variant?: "default" | "first";
  children?: React.ReactNode;
};

export function Accordion({
  variant = "default",
  children,
  ...rest
}: Props & TouchableOpacityProps) {
  const text = getChildrenText(children);
  const other = getChildren(children).filter(
    (child) => typeof child !== "string"
  );

  return (
    <Container variant={variant} {...rest}>
      <Title>{text}</Title>
      <OtherContainer>
        {other.length > 1 && other[1]}
        {other[0]}
      </OtherContainer>
    </Container>
  );
}
