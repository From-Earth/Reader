import { getChildrenCount, getChildrenText } from "@utils/tools";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { useConfigStore } from "@storage/settings";

interface Props {
  children?: React.ReactNode;
  isFinished?: boolean;
  readStats?: string;
}

export function InformativeTag({
  isFinished = false,
  readStats,
  children,
}: Props) {
  const { getConfig } = useConfigStore()
  const { COLORS } = useTheme()
  const text = getChildrenText(children);
  const noChild = getChildrenCount(children) === 0;

  const colorComplete = `${getConfig('colorStateComplete') === '' ? COLORS.SUCCESS : getConfig('colorStateComplete')}`
  const inComplete = `${getConfig('colorStateComplete') === '' ? COLORS.GREY_200 : getConfig('colorStateIncomplete')} `

  if (readStats === "100" || text.at(0) === "100") {
    isFinished = true;
  }

  return (
    <Container colorComplete={colorComplete} colorIncomplete={inComplete} isFinished={isFinished}>
      <Title isFinished={isFinished}>{noChild ? readStats : text}%</Title>
    </Container>
  );
}
