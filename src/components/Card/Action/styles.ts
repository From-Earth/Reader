import styled from "styled-components/native";
import { ImageBackground, TouchableOpacity } from "react-native";

export const Container = styled(ImageBackground).attrs(({ theme }) => ({
  imageStyle: {
    borderRadius: theme.SIZES.size_6,
  }
}))`
  width: 90px;
  height: 90px;
`;

export const TEste = styled.View`
  border-radius: 6px;
`

export const Clickable = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.8,
}))`
  width: 90px;
  height: 90px;
  border-radius: ${({ theme }) => theme.SIZES.size_6}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 4px;
`;

export const TitleContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXSM}px;
  color: ${({ theme }) => theme.COLORS.GREY_900};
`;

export const TextBox = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 60px;
`;
