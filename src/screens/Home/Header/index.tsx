import { Container, Title } from "./styles";

interface Props {
  title: string;
  center?: boolean;
}

export function CarouselHeader({ title, center = false }: Props) {
  return (
    <Container center={center}>
      <Title>{title}</Title>
    </Container>
  );
}
