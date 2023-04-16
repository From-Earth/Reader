import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: ${({ theme }) => theme.SIZES.size_4}px;
  padding: ${({ theme }) => theme.SIZES.size_8}px;
  top: 40px;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.SIZES.size_8}px;
  padding-bottom: ${({ theme }) => theme.SIZES.size_8}px;
  padding-left: ${({ theme }) => theme.SIZES.size_8}px;
  padding-right: ${({ theme }) => theme.SIZES.size_8}px;
  width: auto;
  min-width: 72px;
  z-index: 1;
`;

export const Content = styled.Text.attrs(() => ({
  tabIndex: -1,
  zIndex: 1,
}))`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  width: auto;
  max-height: 64px;
  z-index: 1;
`;
