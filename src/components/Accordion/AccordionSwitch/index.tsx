import { getChildren, getChildrenText } from "@utils/tools";
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";
import { Container, OtherContainer, Title } from "./styles";
import { Switch } from "@components/Switch";
import { useState } from "react";

export type Props = {
    variant?: "default" | "first";
    children?: React.ReactNode;
    switchVariant?: "primary" | "light";
    isChecked?: () => void;
    unChecked?: () => void;
    isActive?: boolean;
};

export function AccordionSwitch({
    variant = "default",
    children,
    switchVariant,
    isChecked,
    isActive,
    unChecked,
    ...rest
}: Props & TouchableOpacityProps) {
    const [checked, setChecked] = useState(isActive);
    const [lastChecked, setLastChecked] = useState(isActive);
    const text = getChildrenText(children);
    const others = getChildren(children).filter((child) => typeof child !== "string")

    function handlePress() {
        setChecked(!checked);
        setLastChecked(checked);
    }

    return (
        <Container variant={variant} {...rest} onPress={handlePress}>
            <Title>{text}</Title>
            <OtherContainer>
                {others}
                <Switch variant={switchVariant} isChecked={isChecked} isActive={checked} unChecked={unChecked} lastValue={lastChecked} />
            </OtherContainer>
        </Container>
    );
}