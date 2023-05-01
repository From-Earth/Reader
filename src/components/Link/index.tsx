import { Linking } from "react-native";
import { Container, Title } from "./styles";
import { getChildrenText } from "@utils/tools";
import { useNavigation } from "@react-navigation/native";

interface LinkParams {
  url?: any;
  children: React.ReactNode;
  navigation?: string;
}

export function Link({ url, children }: LinkParams) {
  const nav = useNavigation();
  const text = getChildrenText(children);

  return (
    <Container onPress={() => nav.navigate(url)}>
      <Title>{text}</Title>
    </Container>
  );
}
