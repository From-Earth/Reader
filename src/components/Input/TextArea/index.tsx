import { Container } from "./styles";
import { TextInputProps } from "react-native";

interface Props {
    label?: string;
}

export function InputTextArea({ label, placeholder, ...rest }: Props & TextInputProps) {


    return <>
        {label && <label>{label}</label>}
        <Container
            {...rest}
            placeholder={placeholder}
            blurOnSubmit={true}
        />
    </>
}