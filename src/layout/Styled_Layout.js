import styled from 'styled-components';
import { bootstrap, portrait } from '../utils/responsive';

const StyledLayout = styled.main`
  padding: 50px;
  background-color: var(--black);
  color: var(--lightWhite);
  min-height: 100vh;
  
  @media ${bootstrap.sm} {
    padding: 0px;
  }


  @media ${portrait.laptopL} {
    font-size: 1em;
  }
  @media ${portrait.laptop} {
    font-size: .9em;
  }
  @media ${portrait.tablet} {
    font-size: .8em;
    h5 {
      font-size: 1.6em;
    }
    svg {
      font-size: 2.4em;
    }
    .btn {
      font-size: unset;
    }
  }
  @media ${bootstrap.sm} {
    h1 {
      font-size: 3.4em
    }
  }
  @media ${portrait.mobileL} {
    font-size: .7em;
    h5 {
      font-size: 1.4em;
    }
    h1 {
      font-size: 3.2em
    }
    svg {
      font-size: 2.2em;
    }
  }
  @media ${portrait.mobileM} {
    font-size: .6em;
    h5 {
      font-size: 1.2em;
    }
    h1 {
      font-size: 3em
    }
    svg {
      font-size: 2em;
    }
  }
`

export default StyledLayout;