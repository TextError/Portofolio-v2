import React from 'react';
import Li from './Li';
import StyledInfo from './Styled_Info';
import Title from '../../../common/title/Title';

const Info = () => (
  <StyledInfo>
    <Title text='Get in Touch' />
    <div className='info'>
      <div className='first'>
        <Li span='Address . . . . . .' p='Chisinau, MDA' />
        <Li span='Email . . . . . . .' p='MyEmail@email.com' />
      </div>
      <div className='second'>
        <Li span='Phone . . . . . .' p='078 123 456' />
        <Li span='Freelance . . . . . .' p='Available' />
      </div>
    </div>
  </StyledInfo>
)

export default Info
