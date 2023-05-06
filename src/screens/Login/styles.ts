import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${() => Dimensions.get("window").height}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
  width: ${() => Dimensions.get("window").width}px
`;

export const LoginForm = styled.View`
  width: 300px;
  padding: 4px;
  gap: 24px;
  margin-top: 48px;
  padding-left: ${({ theme }) => theme.SIZES.size_24}px;
  padding-right: ${({ theme }) => theme.SIZES.size_24}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREY_500};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.GREY_200};
`;