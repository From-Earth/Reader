import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${() => Dimensions.get("window").height}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.SIZES.size_12}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const AccordionGroup = styled.View`
  gap: 4px;
`