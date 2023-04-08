import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs(()  => ({
  activeOpacity: 0.8,
}))`
  width: 90px;
  height: 90px;
  border-radius: ${({ theme }) => theme.SIZES.size_6}px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.GREY_900};
`

export const RightBox = styled.View`
  height: 90px;
  width: 55px;
  padding: 4px;
  align-items: flex-end;
`;

export const LeftBox = styled.View`
  height: 90px;
  width: 35px;
  padding: 4px;
`;

export const TextBox = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 60px;
`;
