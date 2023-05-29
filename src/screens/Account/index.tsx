import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Container, Label, LoginForm, Title } from "./styles";
import { InputText } from "@components/Input";
import { Link } from "@components/Link";
import { useState } from "react";

export function Account() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const onLogIn = async () => {
    let value;
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
              nome,
              email,
              senha,
              cpf: "507.509.468-65",
            }),
          }
        );
      } catch (error) {
        console.log(error);
      }
      console.log(value);
    }
  };

  return (
    <Container>
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        ACCOUNT
      </Header>
      <LoginForm>
        <Title>Log-in, you're disconnected.</Title>
        <InputText
          isHeader={false}
          label="name"
          full={true}
          placeholder="Gustavo Dourado"
          value={nome}
          onChangeText={setNome}
        />

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
          placeholder="********"
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
  );
}
