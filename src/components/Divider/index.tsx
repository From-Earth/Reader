import { Container } from "./styles";

interface Props {
  isSetting?: boolean;
}

export function Divider({ isSetting = false }: Props) {
  return <Container isSetting={isSetting} />;
}
