import { Header } from "@components/Header";
import { AccordionGroup, BlocKForm, Container, Label, LabelButton, Title } from "./styles";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { ButtonIcon } from "@components/Button/Icon";
import { WarningIcon } from "@components/Icon";
import { InputTextArea } from "@components/Input/TextArea";
import { AccordionSwitch } from "@components/Accordion/AccordionSwitch";
import { useState } from "react";
import { generatePattern } from "./generate.pattern";
import { useConfigStore } from "@storage/settings";

export function SearchBarBehavior() {
  const navigation = useNavigation();
  const { setConfig, resetConfig, getConfig } = useConfigStore();
  const [pattern, setPattern] = useState("");

  function handleAtt() {
    if (getConfig("patternsIsActive") && pattern) {
      const validateRegex = /([a-zA-Z0-9]+)(\|)([a-zA-Z0-9]+)/g;
      if (pattern.includes("|")) {
        const [simple, rgx] = pattern.split("|");
        validateRegex.test(rgx)
        setConfig('pattern', `${rgx}${generatePattern(simple)}`)
      } else {
        validateRegex.test(pattern) ? setConfig('pattern', pattern) : setConfig('pattern', generatePattern(pattern));
      }
    }
  }

  return (
    <Container
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <Header isSetting={true}>
        <Button variant="action" onPress={navigation.goBack}>
          voltar
        </Button>
        SEARCH
      </Header>
      <BlocKForm>
        <Title>Search Behavior</Title>
        <AccordionGroup>
          <AccordionSwitch
            isActive={getConfig("searchIsActive")}
            variant="first"
          >
            Search Bar
          </AccordionSwitch>
          <Label>WARNING: without search bar you cant search books.</Label>
        </AccordionGroup>
      </BlocKForm>
      <BlocKForm>
        <Title>Advanced Behavior</Title>
        <AccordionGroup>
          <AccordionSwitch
            isActive={getConfig("patternsIsActive")}
            unChecked={() => resetConfig("patternsIsActive")}
            isChecked={() => setConfig("patternsIsActive", true)}
            variant="first"
          >
            Search Patterns
            <ButtonIcon variant="warning">
              <WarningIcon />
            </ButtonIcon>
          </AccordionSwitch>
        </AccordionGroup>
        <InputTextArea
          placeholder={`example: pdf, epub, .docx | .*boleto.*`}
          onChangeText={setPattern}
        />
        <LabelButton>
          <Label>
            WARNING: activating one or both options will change results of
            findings.
          </Label>
          <Button disabled={getConfig("patternsIsActive")} onPress={handleAtt}>
            save config
          </Button>
        </LabelButton>
      </BlocKForm>
    </Container>
  );
}
