import styled from "styled-components/native";

interface Props {
  withLabel?: boolean;
}

export const Container = styled.TextInput.attrs(({ theme }) => ({
  autoCapitalize: "none",
  autoCorrect: false,
  placeholderTextColor: "#999",
  underlineColorAndroid: "transparent",
  textDecorationLine: "none",
  fontFamily: theme.FONT.REGULAR,
  selectionColor: theme.COLORS.PRIMARY,
  fontSize: theme.FONT_SIZE.SM,
  editable: true,
  multiline: true,
  numberOfLines: 4,
}))<Props>`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_400};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: ${({ theme }) => theme.SIZES.size_4}px;
  border: ${({ theme }) => `1px solid ${theme.COLORS.PRIMARY}`};
  padding: ${({ theme }) => theme.SIZES.size_8}px;
  width: 300px;
  height: 200px;
  text-align-vertical: top;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  margin-bottom: 4px;
`;
