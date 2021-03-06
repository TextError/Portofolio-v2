import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './animation.css';
import './index.css';
import StyledLayout from './Styled_Layout';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;