import styled, { css } from "styled-components"
import { StyledTextProps } from "./interfaces";

export const StyledSubtitle = styled.h3<StyledTextProps>`
  font-size: 1rem;
  font-family: ${({theme}) => theme.fonts.gloock};
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  margin-bottom: 1.5rem;
  position: relative;

  ${(props) => props.textColor === 'white' && css`
    color: ${({theme}) => theme.colors.white}
  `}

  ${(props) => props.textColor === 'black' && css`
    color: ${({theme}) => theme.colors.black}
  `}

  ${(props) => props.textColor === 'green' && css`
    color: ${({theme}) => theme.colors["green-500"]}
  `}

`;
