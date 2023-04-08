import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface Props extends TextInputProps {
  isFocused?: boolean;
  withLabel?: boolean;
  full?: boolean;
}

export const Container = styled.TextInput.attrs(({ theme }) => ({
  autoCapitalize: "none",
  autoCorrect: false,
  placeholderTextColor: "#999",
  underlineColorAndroid: "transparent",
  textDecorationLine: "none",
  fontFamily: theme.FONT.REGULAR,
  selectionColor: theme.COLORS.PRIMARY,
  fontSize: theme.FONT_SIZE.XSM,
}))<Props>`
  height: 36px;
  width: 160px;
  min-width: 120px;
  ${({ full }) => full && "width: 100%"}
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_800};
  border-radius: ${({ theme }) => theme.SIZES.size_4}px;
  border: ${({ theme, isFocused }) =>
    !isFocused ? `none` : `1px solid ${theme.COLORS.PRIMARY}`};
  padding-left: ${({ theme }) => theme.SIZES.size_8}px;
  padding-right: ${({ theme }) => theme.SIZES.size_8}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputHolder = styled.View<Props>`
  flex-direction: column;
  ${({ withLabel }) => !withLabel && "align-items: center"};
  position: relative;
`;

export const FromEarth = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXSM}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  position: absolute;
  top: 39px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  margin-bottom: 8px;
`;
