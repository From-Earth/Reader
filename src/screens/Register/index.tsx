import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@components/Button";
import { Container, Label, LoginForm, Title } from "./styles";
import { Header } from "@components/Header";
import { InputText } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useConfigStore } from "@storage/settings";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export function Register() {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setConfig } = useConfigStore();

  const onSubmit = async () => {
    try {
      const response = await fetch(
        "https://webapisenac.azurewebsites.net/usuario/cadastrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: name,
            email,
            senha: password,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Account created", responseData);
        setConfig("account", {
          id: responseData.id ?? 0,
          name: responseData.nome,
          email: responseData.email,
          isAuthenticated: true,
          password: responseData.senha,
          token: responseData.token ?? "",
        });
        navigation.navigate("Login");
      } else {
        console.log("Error creating account");
      }
    } catch (error) {
      console.log(error);
      console.log("Error creating account");
    }
  };

  return (
    <Container>
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          Voltar
        </Button>
        REGISTER
      </Header>
      <LoginForm>
        <Title>Create an account.</Title>

        <InputText
          label="Name"
          isHeader={false}
          full={true}
          onChangeText={setName}
          inputMode="text"
          maxLength={36}
        />
        <InputText
          label="E-mail"
          isHeader={false}
          full={true}
          onChangeText={setEmail}
          inputMode="email"
        />
        <InputText
          label="Password"
          isHeader={false}
          full={true}
          onChangeText={setPassword}
          inputMode="text"
          passwordRules="minlength: 8; maxlength: 16;"
          secureTextEntry={true}
        />
        <Button full={true} onPress={() => onSubmit()}>
          Register
        </Button>
      </LoginForm>
    </Container>
  );
}
