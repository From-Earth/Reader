import { Button } from "@components/Button";
import { AccordionGroup, Container, Title } from "./styles";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Accordion } from "@components/Accordion";
import { RightIcon } from "@components/Icon";
import { useMMKVStore } from "@storage/MMKV/index";
import {
  readBooksInDirectory,
  requestExternalStoragePermission,
} from "@utils/fs.storage";

export function Settings() {
  const navigation = useNavigation();
  const { setPermissionToReadExternal, setBookData, getBookData } =
    useMMKVStore();

  async function handleReadBooks() {
    const permission = await requestExternalStoragePermission();
    if (!permission) return;
    if (permission) {
      setPermissionToReadExternal(permission);
      const books = await readBooksInDirectory();
      setBookData("allBooks", books);
    }
  }

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
        <Accordion
          variant="first"
          onPress={() => navigation.navigate("Account")}
        >
          Account
          <RightIcon />
        </Accordion>
        <Accordion onPress={() => navigation.navigate("Account")}>
          Payments & plans
          <RightIcon />
        </Accordion>
      </AccordionGroup>

      <Title>Component Behaviour Control</Title>
      <AccordionGroup>
        <Accordion
          variant="first"
          onPress={() => navigation.navigate("Search")}
        >
          Search Bar
          <RightIcon />
        </Accordion>
        <Accordion onPress={() => navigation.navigate("Chips")}>
          Chips
          <RightIcon />
        </Accordion>
      </AccordionGroup>

      <Title>General</Title>
      <AccordionGroup>
        <Accordion
          variant="first"
          onPress={() => console.log(getBookData("allBooks"))}
        >
          ChangeLog
          <RightIcon />
        </Accordion>
        <Accordion onPress={() => handleReadBooks()}>
          Local documents
          <RightIcon />
        </Accordion>
      </AccordionGroup>
    </Container>
  );
}
