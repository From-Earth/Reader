import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  height: ${() => Dimensions.get("window").height}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
  width: ${() => Dimensions.get("window").width}px;
  padding-bottom: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: white;
  text-align: center;
`;

export const BlocKForm = styled.View`
  gap: 24px;
  margin-top: 24px;
  padding-left: ${({ theme }) => theme.SIZES.size_24}px;
  padding-right: ${({ theme }) => theme.SIZES.size_24}px;
  align-items: center;
`;

export const AccordionGroup = styled.View`
  gap: 4px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ theme }) => theme.COLORS.GREY_200};
  max-width: 150px;
`;

export const LabelButton = styled.View`
  flex-direction: row;  
  align-items: center;  
  justify-content: center;
  gap: 24px;
`
