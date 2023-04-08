import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${() => Dimensions.get("window").height}px;
  width: ${() => Dimensions.get("window").width}px;
  align-items: center;
`;