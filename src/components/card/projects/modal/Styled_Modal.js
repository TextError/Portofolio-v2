import styled from 'styled-components';
import { portrait, bootstrap } from '../../../../utils/responsive';

const StyledModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 50;
  .wrapper {
    .content-top, .content-bottom {
      border-radius: 0;
    }
  }
  .project-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      ::before {
        background-size: contain;
      }
    }
    .background-container {
      height: 300px;
    }
    h5, p {
      padding: 0 10px;
    }
    h5 {
      :nth-child(1) {
        padding-top: 16px;
      }
    }
    .skill {
      h5 {
        font-size: 1em;
      }
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      .logo {
        width: 100px;
        margin: 0 10px;
        p {
          font-size: .8em;
          text-align: center;
          margin-bottom: 0px;
          padding: 0px;
          text-transform: uppercase;
          letter-spacing: var(--spacing);
        }
        .outer-logo {
          position: relative;
          height: 50px;
          width: 100%;
          padding: 8px;
          margin: 3px 0;
          .inner-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background: rgb(225, 225, 225);
            border-radius: var(--border);
          }
        }
      }
    }
    .address {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 8px 0;
      .btn {
        align-items: center;
        min-height: 50px;
        p {
          font-size: .7em;
        }
        span {
          transform: rotate(90deg);
        }
      }
    }
  }
  .close-modal {
    position: sticky;
    top: 0;
    height: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 50;
    span {
      padding: 0 0 36px 20px;
      svg {
        background: var(--grey);
        cursor: pointer;
        color: var(--primary);
      }
    }
  }
  @media ${bootstrap.lg} {
    .project-modal {
      height: 850px;
    }
    .close-modal {
      span {
        padding: 0 0 47px 20px;
      }
    }
  }
  @media ${bootstrap.sm} {
    .close-modal {
      top: 82px;
    }
  }
  @media ${portrait.mobileL} {
    .background-container {
      height: 200px !important;
    }
    .project-modal {
      height: 750px;
    }
    .close-modal {
      top: 75px;
      span {
        padding: 0 0 41px 20px;
      }
    }
  }
  @media ${portrait.mobileM} {
    .close-modal {
      top: 67px;
    }
  }
`

export default StyledModal;