import styled from "styled-components";
import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";

const NotFoundContainer = styled(SectionContainer)`
  @media ${device.laptop} {
    flex-direction: column;
  }

  button {
    @media ${device.laptop} {
      width: 50%;
    }
  }
`;

export default NotFoundContainer;