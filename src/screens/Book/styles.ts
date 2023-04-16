import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: ${() => Dimensions.get("window").height}px;
  width: ${() => Dimensions.get("window").width}px;
  align-items: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.SIZES.size_14}px;
  height: 36px;
  line-height: 36px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;