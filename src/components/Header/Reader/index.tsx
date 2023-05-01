import { Content, Title, TitleC } from "./styles";
import { Container } from "./styles";
import { ButtonIcon } from "@components/Button/Icon";
import { Close, Search } from "@components/Icon";
import { Divider } from "@components/Divider";
import { useNavigation } from "@react-navigation/native";

interface HeaderParams {
  title: string;
}

export function HeaderReader({ title }: HeaderParams) {
  const navigation = useNavigation();
  return (
    <Container>
      <TitleC>
        <Title>{title.length > 24 ? `${title.slice(0, 24)}...` : title}</Title>
      </TitleC>
      <Content>
        <ButtonIcon>
          <Search />
        </ButtonIcon>
        <ButtonIcon />
        <Divider vertical={true} />
        <ButtonIcon variant="warning" onPress={() => navigation.goBack()}>
          <Close />
        </ButtonIcon>
      </Content>
    </Container>
  );
}
