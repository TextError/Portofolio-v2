import React from 'react';

import Title from '../../../common/title/Title';
import Li from './Li';
import Text from './Text';

import StyledAboutMe from './Styled_About_Me';
import ToLeft from '../../../common/content/To_Left';
import ToRight from '../../../common/content/To_Right';
import FromTop from '../../../common/content/From_Top';

const AboutMe = () => (
  <StyledAboutMe>
    <div className='about-me'>
      <Title text='About Me' />
      <div className='row no-gutters'>
        <div className='col-6'>
          <ToLeft isClass='' width={100} />
          <Text />
          <FromTop isClass='top right' height={100} />
        </div>
        <div className='col-6'>
          <ToRight isClass='' width={100} />
          <Li span='Age . . . . . . . .' p='36' />
          <Li span='Country . . . . . .' p='United Kingdom' />
          <Li span='Address . . . . . .' p='Reading, UK' />
          <Li span='Freelance . . . . .' p='Available' />
        </div>
      </div>
    </div>
  </StyledAboutMe>
)

export default AboutMe;