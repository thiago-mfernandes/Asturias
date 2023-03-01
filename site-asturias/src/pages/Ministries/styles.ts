import styled from "styled-components"
import { SectionContainer } from "../../components/Section/styles";
import { device } from "../../styles/default";

export const MinistriesContainer = styled(SectionContainer)`
  
  p {
    color: ${props => props.theme.colors.black};
  }

  img {
    align-self: center;
    width: 100%;
    margin: 2.5rem 0;

    @media ${device.tablet} {
      width: 50%;

    }
  }
`;