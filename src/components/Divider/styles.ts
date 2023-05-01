import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface Props {
  isSetting?: boolean;
  vertical?: boolean;
}

export const Container = styled.View<Props>`
  width: ${({ vertical }) =>
    !vertical ? Dimensions.get("window").width : 0.5}px;
  background-color: ${({ theme, isSetting }) =>
    isSetting ? theme.COLORS.GREY_400 : theme.COLORS.NEUTRAL_900};
  height: ${({ vertical }) => (vertical ? 34 : 0.5)}px;
`;
