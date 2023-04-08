import { getChildrenText } from "@utils/tools";
import { Description, Title } from "./styles";
import { View } from "react-native";

interface Props {
    children: React.ReactNode;
    description: string;
}

export function Empty({ children, description }: Props) {
    const text = getChildrenText(children);

    return <View style={{
        gap: 8
    }} >
        <Title>{text}</Title>
        <Description>{description}</Description>
    </View>

}