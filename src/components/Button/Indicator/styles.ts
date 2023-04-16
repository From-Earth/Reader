import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
  connected: boolean;
};

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9,
  styledRef: null
}))<Props>`
  border: none;
  display: flex;
  flex-direction: row;
  min-height: ${({ theme }) => theme.SIZES.size_36}px;
  background-color: ${({ connected, theme }) =>
    connected ? theme.COLORS.SUCCESS : theme.COLORS.ERROR};

  border-radius: ${({ theme }) => theme.SIZES.size_4}px;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.SIZES.size_36}px;
  padding: ${({ theme }) => theme.SIZES.size_4}px;
  z-index: 1;
`;

export const TooltipContainer = styled.View`
  position: relative;
`;
