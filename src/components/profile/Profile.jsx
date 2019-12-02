import React from 'react';

import Photo from './photo/Photo';
import Links from './links/Links';
import Footer from './footer/Footer';

import StyledProfile from './Styled_Profile';

const Profile = () => {
  return (
    <StyledProfile>
      <div className='profile'>
        <Photo />
        <h3>Savin Raul Calin</h3>
        <h5>Web Developer</h5>
        <Links />
        <Footer />
      </div>
    </StyledProfile>
  )
}

export default Profile;