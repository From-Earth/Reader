import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface Props {
  center: boolean;
}

export const Container = styled.View<Props>`
  background-color: transparent;
  width: ${() => Dimensions.get("window").width}px;
  margin-top: 24px;
  height: 24px;
  ${({ center }) => center && "align-items: center"}
  justify-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  color: ${({ theme }) => theme.COLORS.GREY_900};
`;
