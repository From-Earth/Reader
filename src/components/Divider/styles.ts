import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface Props {
  isSetting?: boolean;
}

export const Container = styled.View<Props>`
  width: ${() => Dimensions.get("window").width}px;
  background-color: ${({ theme, isSetting }) =>
    isSetting ? theme.COLORS.GREY_400 : theme.COLORS.BLACK};
  height: .5px;
`;
