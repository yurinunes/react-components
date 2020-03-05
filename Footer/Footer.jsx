import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HomeFooter} from "./FooterStyled";

class Footer extends Component {
  render() {

    return (
      <HomeFooter>
        <h3 onClick={() => this.props.onRouteChange('worked!')}>Aprofunde-se</h3>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </HomeFooter>
    );
  }
}

export default Footer;
