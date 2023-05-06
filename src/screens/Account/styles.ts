import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  gap: 48px;
  height: ${() => Dimensions.get("window").height}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
  width: ${() => Dimensions.get("window").width}px;
`;

export const AccordionGroup = styled.View`
  gap: 16px;
`;
