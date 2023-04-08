import { Header } from "@components/Header";
import { AccordionGroup, BlocKForm, Container, Label, LabelButton, Title } from "./styles";
import { Button } from "@components/Button";
import { AccordionSwitch } from "@components/Accordion/AccordionSwitch";
import { ButtonIcon } from "@components/Button/Icon";
import { WarningIcon } from "@components/Icon";
import { useNavigation } from "@react-navigation/native";
import { InputTextArea } from "@components/Input/TextArea";
import { useState } from "react";
import { useConfigStore } from "@storage/settings/default";

export function ChipsConfig() {
    const navigation = useNavigation();
    const { setConfig, resetConfig, getConfig } = useConfigStore()
    const [color, setColor] = useState('')

    function handleAtt() {
        if (getConfig('chipsColorIsActive') && color !== '') {

            if (!color.includes('|')) return alert('invalid color pattern')
            const validateRegex = /#[0-9a-fA-F]{6}/g;
            const [complete, incomplete] = color.split('|')
            if (!validateRegex.test(complete)) return alert('invalid color pattern')
            if (!validateRegex.test(incomplete)) return alert('invalid color pattern')
            setConfig('colorStateComplete', complete)
            setConfig('colorStateIncomplete', incomplete)
        }
    }

    return <Container>
        <Header isSetting={true}>
            <Button variant="action" onPress={() => navigation.goBack()}>
                voltar
            </Button>
            CHIPS
        </Header>
        <BlocKForm>
            <Title>Chips Behavior</Title>
            <AccordionGroup>
                <AccordionSwitch isActive={getConfig('chipsIsActive')} unChecked={() => resetConfig('chipsIsActive')} isChecked={() => setConfig('chipsIsActive', true)} variant="first">
                    Chips
                </AccordionSwitch>
                <Label>
                    WARNING: activating this option desactivate the chips.
                </Label>
            </AccordionGroup>
        </BlocKForm>
        <BlocKForm>
            <Title>Advanced Behavior</Title>
            <AccordionGroup>
                <AccordionSwitch isActive={getConfig('chipsColorIsActive')} unChecked={() => resetConfig('chipsColorIsActive')} isChecked={() => setConfig('chipsColorIsActive', true)}>
                    Chips Colors
                    <ButtonIcon variant="warning">
                        <WarningIcon />
                    </ButtonIcon>
                </AccordionSwitch>
            </AccordionGroup>
            <InputTextArea
                placeholder={`(default complete) ${getConfig('colorStateComplete')} | (default incomplete) ${getConfig('colorStateIncomplete')}`}
                onChangeText={setColor}
                multiline={true}
            />
            <LabelButton>
                <Label>
                    WARNING: activating this options will change the color of the chips.
                </Label>
                <Button disabled={getConfig('chipsColorIsActive')} onPress={handleAtt}>
                    save config
                </Button>
            </LabelButton>
        </BlocKForm>
    </Container>
}