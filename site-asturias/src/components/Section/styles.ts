import styled, { css } from "styled-components";
import { device } from "../../styles/default";

interface SectionContainerProps {
  pathname?: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: 10rem 1.5rem;

  @media ${device.tablet} {
    padding: 10rem 4rem;
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
  }

 

  ${({pathname}) => pathname === '/' && css`
    padding: 40rem 1.25rem 10rem;
    background-color: ${props => props.theme.colors["green-300-d"]};
    color: ${props => props.theme.colors.white};  

    @media ${device.tablet} {
      padding: 55rem 4rem 10rem;
    }

    @media ${device.laptop} {
      padding: 35rem 5rem 10rem;
      display: flex;
    }
  `}
`;