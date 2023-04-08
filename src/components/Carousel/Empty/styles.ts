import styled from "styled-components/native";

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    text-align: center;
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GREY_900};
`