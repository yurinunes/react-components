import styled from "styled-components";
import {Card} from "react-bootstrap";

export const HomeCard = styled(Card)`
  height: 100%;
  border-radius: 1rem!important;
  
  .card-body {
    display: flex;
    align-items: center;
    
    .card-title {
      margin-right: 1rem;
      
      svg {
        color: var(--aprofunde-se-pale-green);
      }
    }
    p {
        font-weight: bold;
        font-style: italic;
        text-align: left;
        font-size: .85rem;
        color: var(--aprofunde-se-dark-green);
      }
  }
`;
