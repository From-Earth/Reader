import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width:${ Dimensions.get("window").width}px;
  height: 72px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFBFB;
  padding-left: ${({ theme }) => theme.SIZES.size_24}px;
  padding-right: ${({ theme }) => theme.SIZES.size_24}px;
  gap: 24px;
  border-bottom-width: .5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.NEUTRAL_800};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL_800};
`;

export const TitleC = styled.View`
    height: 100%;
    width: 90px;
    align-items: center;
    justify-content: center;
`
