import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Container, Label, LoginForm, Title } from "./styles";
import { InputText } from "@components/Input";
import { Link } from "@components/Link";

export function Account() {
    const navigation = useNavigation();

    return <Container>
        <Header isSetting={true}>
            <Button variant="action" onPress={navigation.goBack}>
                voltar
            </Button>
            ACCOUNT
        </Header>
        <LoginForm>
            <Title>Log-in, you're disconnected.</Title>
            <InputText isHeader={false} label="email" full={true} placeholder="gustavo.dourado@gmail.com" />
            <InputText isHeader={false} label="password" full={true} secureTextEntry={true} />
            <Button full={true} >
                log-in
            </Button>
            <Label>Don't have an account?</Label>
            <Link url={'Register'}>
                Sign up &gt;
            </Link>
        </LoginForm>
    </Container>
}