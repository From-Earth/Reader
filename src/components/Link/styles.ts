import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.8,
}))``

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
