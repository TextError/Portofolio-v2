import styled from 'styled-components';

const StyledCardTwo = styled.div`
  h5 {
      padding-left: 0px;
    }
  .card-two {
    margin-bottom: 30px;
    .languages, .design {
      padding: 10px 0;
      h5 {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        svg {
          padding-bottom: 2px;
          margin-right: 5px;
          color: var(--primary);
        }
      }
    }
    .languages {
      p {
        margin-bottom: 0px;
      }
      .progres-linear {
        margin-bottom: 18px;
      }
      .box {
        padding: 18px 0 0 18px;
      }
    }
    .design {
      .box-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 18px;
        .text {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          p {
            margin-bottom: 0px;
            font-size: .9em;
          }
        }
      }
    }
  }
`

export default StyledCardTwo;