import { Button } from "@components/Button";
import { AccordionGroup, Container } from "./styles";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { useConfigStore } from "@storage/settings";
import { CardUser } from "@components/Card/User";
import { Accordion } from "@components/Accordion";
import { RightIcon, WarningIcon } from "@components/Icon";
import { ButtonIcon } from "@components/Button/Icon";
import { useMMKVStore } from "@storage/MMKV";
import { Book } from "@storage/MMKV/default";
import { readAsStringAsync } from "expo-file-system";
import { encode } from "base-64";
import axios from "axios";

export function Account() {
  const { getConfig, resetAllConfig } = useConfigStore();
  const { getBookData } = useMMKVStore();
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

  async function uploadPDF() {
    console.log(books[0].uri)
    try {
      const pdf = await readAsStringAsync(books[0].uri, {
        encoding: 'base64'
      });
      
      const binary = encode(pdf);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      
      const blob = new Blob([bytes], { type: 'application/pdf' });
      
      const data = new FormData();
      data.append('id', userId.toString());
      data.append('arquivo', blob);
      
      const url = 'https://webapisenac.azurewebsites.net/documentos/upload';
      const res = await fetch(url, {
        method: 'POST',
        body: data
      });

      const respo = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(res.ok);
      console.log(res.status);
      console.log(respo.status);
      console.log(detectMimeType(pdf));
    } catch (error) {
      console.log(error);
    }
  }

  const signatures: any = {
    JVBERi0: 'application/pdf',
    R0lGODdh: 'image/gif',
    R0lGODlh: 'image/gif',
    iVBORw0KGgo: 'image/png',
    '/9j/': 'image/jpg',
};

  function detectMimeType(b64: string) {
    for (let s in signatures) {
      if (b64.indexOf(s) === 0) {
        return signatures[s];
      }
    }
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
        <Button onPress={uploadPDF}>sincronizar</Button>
      </AccordionGroup>
    </Container>
  );
}
