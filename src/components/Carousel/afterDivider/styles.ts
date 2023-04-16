import styled from "styled-components/native";

interface Props {
  index: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-grow: 1;
`;

export const Separator = styled.View<Props>`
  ${({ index }) =>
    index % 2 === 0 && "margin-right: 16px margin-left: 16px"}
`;