import React, {Component} from 'react';
import { Content } from "./CentrilizedSectionStyled";

class CentralizedSection extends Component {

  render() {

    return (
      <Content>
        <h1>{ this.props.title }</h1>
        <p> {this.props.mainText} </p>
      </Content>
    );
  }
}

export default CentralizedSection;
