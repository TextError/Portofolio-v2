import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/button/Custom_Button';
import GetApp from '@material-ui/icons/GetApp';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';

import StyledFooter from './Styled_Footer';

const Footer = ({ onRedirect }) => {
  const onDownload = () => {};
  return (
    <StyledFooter>
      <div className='footer'>
        <div className='right'>
          <CustomButton text='download cv' onClick={onDownload} isLogo={<GetApp />} />
        </div>
        <div className='middle' />
        <div className='left'>
          <CustomButton text='contact me' onClick={onRedirect} isLogo={<KeyboardCapslockIcon />} />
        </div>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  onRedirect: PropTypes.func.isRequired
}

export default Footer;