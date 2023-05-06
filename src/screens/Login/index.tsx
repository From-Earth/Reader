import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Container, Label, LoginForm } from "./styles";
import { InputText } from "@components/Input";
import { Link } from "@components/Link";
import { useState } from "react";
import { useConfigStore } from "@storage/settings";
import { Account } from "@screens/Account";

export function Login() {
  const navigation = useNavigation();
  const { setConfig, getConfig } = useConfigStore();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const onLogIn = async () => {
    let value;
    let isAuthenticaded = false;
    if (email && senha) {
      try {
        value = await fetch(
          "https://webapisenac.azurewebsites.net/usuario/logar",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              senha,
            }),
          }
        );
      } catch (error) {
        console.log(error);
      }
      if (value?.ok) {
        isAuthenticaded = true;
        const data = await value.json();
        setConfig("account", {
          id: data.id,
          name: data.nome,
          email: data.email,
          isAuthenticated: isAuthenticaded,
          password: data.senha,
          token: data.token,
        });
      }
    }
  };

  return !getConfig("account").isAuthenticated ? (
    <Container>
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        ACCOUNT
      </Header>
      <LoginForm>
        <InputText
          isHeader={false}
          label="email"
          full={true}
          placeholder="gustavo.dourado@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          isHeader={false}
          label="password"
          full={true}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <Button full={true} onPress={() => onLogIn()}>
          log-in
        </Button>
        <Label>Don't have an account?</Label>
        <Link url={"Register"}>Sign up &gt;</Link>
      </LoginForm>
    </Container>
  ) : (
    <Account />
  );
}
