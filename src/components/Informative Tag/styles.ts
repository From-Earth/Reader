import styled from "styled-components/native";

interface Props {
  isFinished?: boolean;
  colorComplete?: string;
  colorIncomplete?: string;
}

export const Container = styled.View<Props>`
  background-color: transparent;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 1px;
  padding-top: 1px;
  border: ${({ isFinished, colorComplete, colorIncomplete }) =>
    isFinished ? `1px solid ${colorComplete}` : `1px solid ${colorIncomplete}`};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  max-width: 40px;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ isFinished, colorComplete, colorIncomplete }) =>
    isFinished ? colorComplete : colorIncomplete};
`;
