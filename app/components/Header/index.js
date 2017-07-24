import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderSection from './HeaderSection';
import Banner from './banner.jpg';
import messages from './messages';
import H1 from '../H1';
import H3 from '../H3';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="#">
            <FormattedMessage {...messages.register} />
          </HeaderLink>
          <HeaderLink to="/signin">
            <FormattedMessage {...messages.signin} />
          </HeaderLink>
          <HeaderLink to="/logout">
            <FormattedMessage {...messages.logout} />
          </HeaderLink>
        </NavBar>
        <HeaderSection>
          <H1>
            <FormattedMessage {...messages.startProjectHeader} />
          </H1>
          <H3>
            <FormattedMessage {...messages.startProjectMessage} />
          </H3>
        </HeaderSection>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="cute puppies and kittens" />
        </A>
      </div>
    );
  }
}
export default Header;
