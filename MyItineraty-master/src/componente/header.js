import React from 'react';
import MytineraryLogo from '../IMG/MYtineraryLogo.png';
//<link rel='stylesheet' type='text/css' href='./'>

class Header extends React.Component
{
    render() {
      return (
      <div>
        <img src={MytineraryLogo} alt='logo' />;
      </div>
      )
    }
}
export default Header;

