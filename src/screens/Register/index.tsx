import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@components/Button";
import { Container, Label, LoginForm, Title } from "./styles";
import { Header } from "@components/Header";
import { InputText } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export function Register() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        REGISTER
      </Header>
      <LoginForm>
        <Title>Create an account.</Title>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isHeader={false}
              full={true}
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Label>This field is required.</Label>}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
              isHeader={false}
              full={true}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Label>This field is required.</Label>}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isHeader={false}
              full={true}
              secureTextEntry
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Label>This field is required.</Label>}
        <Button full={true} onPress={handleSubmit(onSubmit)}>
          Register
        </Button>
      </LoginForm>
    </Container>
  );
}
