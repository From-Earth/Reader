import { TouchableOpacity } from "react-native";
import styled from "styled-components";

interface Props {
  variant: "primary" | "warning";
}

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9,
}))<Props>`
  display: flex;
  flex-direction: row;
  min-height: ${({ theme }) => theme.SIZES.size_36}px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.PRIMARY : theme.COLORS.ERROR};

  border-radius: ${({ theme }) => theme.SIZES.size_4}px;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.SIZES.size_36}px;
  padding: ${({ theme }) => theme.SIZES.size_4}px;
`;
