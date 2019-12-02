import styled from 'styled-components';
import { Primary, DarkWhite, Grey, Border } from '../../layout/index.scss';

const StyledProfile = styled.section`
  .profile {
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: ${Grey};
    border-radius: ${Border};
    z-index: 10;
    ::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -15px;
      width: 100%;
      height: 100%;
      border-radius: ${Border};
      background: ${Grey};
      opacity: .5;
      z-index: -10;
    }
    .photo {
      position: relative;
      width: 150px;
      height: 150px;
      margin-bottom: 14px;
      ::before {
        content: '';
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 75px;
        top: 10px;
        left: -10px;
        background: linear-gradient(135deg, rgba(120, 204, 109, .3) 0%, rgba(120, 204, 109, .01) 100%);
      }
      img {
        border-radius: 75px;
      }
    }
    h5 {
      color: ${Primary};
      font-size: 1.1em;
    }
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;
      li {
        margin: 0 5px;
        color: ${DarkWhite}
      }
    }
  }
`

export default StyledProfile;