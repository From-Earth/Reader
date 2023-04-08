import { Button } from "@components/Button";
import { AccordionGroup, Container, Title } from "./styles";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Accordion } from "@components/Accordion";
import { RightIcon } from "@components/Icon";
import { useConfigStore } from "@storage/settings/default";


export function Settings() {
  const navigation = useNavigation();
  const { config } = useConfigStore()
  return (
    <Container>
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        SETTINGS
      </Header>

      <Title>Account Control</Title>
      <AccordionGroup>
        <Accordion variant="first" onPress={() => navigation.navigate('Account')}>
          Account
          <RightIcon />
        </Accordion>
        <Accordion onPress={() => navigation.navigate('Account')}>
          Payments & plans
          <RightIcon />
        </Accordion>
      </AccordionGroup>

      <Title>Component Behaviour Control</Title>
      <AccordionGroup>
        <Accordion variant="first" onPress={() => navigation.navigate('Search')}>
          Search Bar
          <RightIcon />
        </Accordion>
        <Accordion onPress={() => navigation.navigate('Chips')}>
          Chips
          <RightIcon />
        </Accordion>
      </AccordionGroup>

      <Title>General</Title>
      <AccordionGroup>
        <Accordion variant="first" onPress={() => console.log(config)}>
          ChangeLog
          <RightIcon />
        </Accordion>
      </AccordionGroup>
    </Container>
  );
}
