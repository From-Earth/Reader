import { Header } from "@components/Header";
import { Container } from "./styles";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import Pdf from "react-native-pdf";

interface Params {
    uri: string;
    title: string;
}

export function Book() {
    const navigation = useNavigation();
    const { params } = useRoute();
    const { uri, title } = params as Params;

    return <Container>
        <Header isSetting={true}>
            <Button variant="action" onPress={navigation.goBack}>
                voltar
            </Button>
            {title}
        </Header>
        <Pdf
            source={{ uri: `${uri}`, cache: true }}
        />
    </Container>
}