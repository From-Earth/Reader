import { CaretLeft, CaretRight, Gear, LinkBreak, LinkSimple, MagnifyingGlass, Warning, X } from "phosphor-react-native";
import styled from "styled-components";

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY,
  size: theme.SIZES.size_16 ,
  ariaHidden: true
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DisconnectedIcon = styled(LinkBreak).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 20,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConnectedIcon = styled(LinkSimple).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 20,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightIcon = styled(CaretRight).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.SIZES.size_16 ,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningIcon = styled(Warning).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.SIZES.size_20 ,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Settings = styled(Gear).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 20,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Close = styled(X).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 20,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Search = styled(MagnifyingGlass).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 20,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`;