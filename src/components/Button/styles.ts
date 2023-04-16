import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonVariant = "primary" | "success" | "danger" | "action";

interface Props {
  variant?: ButtonVariant;
  full?: boolean;
  disabled: boolean;
};

const variants: any = {
  primary: "#775CFF",
  success: "#22C55E",
  danger: "#DC2626",
  "": "#775CFF",
};

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9,
}))<Props>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.SIZES.size_8 }px;
  min-height: ${({ theme }) => theme.SIZES.size_32 }px;
  max-height: ${({ theme }) => theme.SIZES.size_32 }px;
  background-color: ${({ variant, theme }) =>
    variant ? variants[variant as any] : theme.COLORS.PRIMARY};

  border-radius: ${({ theme }) => theme.SIZES.size_4 }px;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.SIZES.size_32 }px;
  ${({ full }) => full && "width: 100%"}
  padding: ${({ theme }) => theme.SIZES.size_4 }px;
  border-color: ${({ variant }) =>
    variant === "action" && "transparent" ? "transparent" : "transparent"};
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme, variant }) =>
    variant === "action" ? theme.COLORS.PRIMARY : theme.COLORS.WHITE};
`;

export const LoadingCircle = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 16,
}))`
  background-color: transparent;
`;
