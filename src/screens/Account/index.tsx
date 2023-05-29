import { Button } from "@components/Button";
import { AccordionGroup, Container } from "./styles";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { useConfigStore } from "@storage/settings";
import { CardUser } from "@components/Card/User";
import { Accordion } from "@components/Accordion";
import { RightIcon, WarningIcon } from "@components/Icon";
import { ButtonIcon } from "@components/Button/Icon";
import { Book } from "@storage/MMKV/default";
import { useAsyncStore } from "@storage/MMKV/versaofudida";

export function Account() {
  const { getConfig, resetAllConfig } = useConfigStore();
  const { getBookData } = useAsyncStore();
  const navigation = useNavigation();
  const name = getConfig("account").name.split(" ")[0];
  const userId: number = getConfig("account").id;

  const books: Book[] = [...(getBookData("allBooks") as Book[])];

  function deleteAccount() {
    fetch(`https://webapisenac.azurewebsites.net/usuario/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Account deleted successfully
          console.log("Account deleted");
          navigation.navigate("Home");
          setTimeout(() => resetAllConfig(), 120);
        } else {
          throw new Error("Failed to delete account");
        }
      })
      .catch((error) => {
        // An error occurred
        console.error("Error deleting account:", error);
      });
  }

  function logOut() {
    navigation.navigate("Home");
    setTimeout(() => resetAllConfig(), 120);
  }

  return (
    <Container>
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        ACCOUNT
      </Header>
      <CardUser name={name} />
      <AccordionGroup>
        <Accordion variant="first" onPress={() => deleteAccount()}>
          Deletar conta
          <RightIcon />
          <ButtonIcon variant="warning">
            <WarningIcon />
          </ButtonIcon>
        </Accordion>
        <Accordion onPress={logOut}>
          Log-out
          <RightIcon />
        </Accordion>
      </AccordionGroup>
    </Container>
  );
}
