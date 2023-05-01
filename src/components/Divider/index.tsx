import { Container } from "./styles";

interface Props {
  isSetting?: boolean;
  vertical?: boolean;
}

export function Divider({ isSetting = false, vertical = false }: Props) {
  return <Container vertical={vertical} isSetting={isSetting} />;
}
