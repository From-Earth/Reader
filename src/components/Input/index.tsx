import { useState } from "react";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";
import { Container, FromEarth, InputHolder, Label } from "./styles";

interface Props {
  isHeader?: boolean;
  label?: string;
  full?: boolean;
}

export function InputText({ isHeader = true, label, full, ...rest }: TextInputProps & Props) {
  const [isFocused, setIsFocused] = useState(false);
  const hasLabel = Boolean(label);

  return (
    <InputHolder withLabel={hasLabel}>
      {label && <Label>{label}</Label>}
      <Container full={full}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit={true}
        {...rest}
      />
      {isHeader && <FromEarth>FROM EARTH</FromEarth>}
    </InputHolder>
  );
}
