import { Linking } from "react-native"
import { Container, Title } from "./styles"
import { getChildrenText } from "@utils/tools"
import { useNavigation } from "@react-navigation/native"

interface LinkParams {
    url?: string
    children: React.ReactNode
    navigation?: string
}

export function Link({ url, children, navigation }: LinkParams) {
    const nav = useNavigation()
    const text = getChildrenText(children);

    return !navigation ? (<Container onPress={() => Linking.openURL(url as string)}>
        <Title>{text}</Title>
    </Container>) : (
        <Container onPress={() => nav.navigate(url)}>
            <Title>{text}</Title>
        </Container>
    )
}