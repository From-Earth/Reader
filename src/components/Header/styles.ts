import styled from "styled-components/native";

interface Props {
  isSetting: boolean;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 72px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.SIZES.size_24}px;
  padding-right: ${({ theme }) => theme.SIZES.size_24}px;
  gap: 24px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
  ${({ isSetting }) => (isSetting ? `border-bottom-width: 0.50px;` : "")};
  ${({ isSetting, theme }) =>
    isSetting ? `border-bottom-color: ${theme.COLORS.GREY_400};` : ""};
  margin-bottom: ${({ theme }) => theme.SIZES.size_8}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.SIZES.size_14}px;
  height: 36px;
  line-height: 36px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;