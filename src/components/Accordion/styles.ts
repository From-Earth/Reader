import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export interface Props  {
  variant: "default" | "first";
};

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9,
}))<Props>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.SIZES.size_8}px;
  min-height: ${({ theme }) => theme.SIZES.size_40}px;
  max-height: ${({ theme }) => theme.SIZES.size_40}px;
  width: ${() => Dimensions.get("window").width - 16}px;
  background-color: ${({ variant, theme }) =>
    variant === "first" ? theme.COLORS.GREY_900 : theme.COLORS.GREY_400};

  border-radius: ${({ theme }) => theme.SIZES.size_4}px;
  align-items: center;
  justify-content: space-between;
  min-width: ${({ theme }) => theme.SIZES.size_40}px;
  padding: ${({ theme }) => theme.SIZES.size_8}px;
`;

export const OtherContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SIZES.size_8}px;
  height: 40px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
