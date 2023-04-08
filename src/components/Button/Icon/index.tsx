import { Settings } from "@components/Icon";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface Props {
  variant?: "primary" | "warning";
  children: React.ReactNode
}

export function ButtonIcon({ variant = "primary", children, ...rest }: TouchableOpacityProps & Props) {
  return (
    <Container variant={variant} {...rest}>
      {!children ? <Settings /> : children}
    </Container>
  );
}
