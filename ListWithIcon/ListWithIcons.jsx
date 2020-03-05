import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Content} from "./ListWithIconStyled";

class ListWithIcons extends Component {

  render() {

    return (
      <Content className='list-with-icons'>
        <ul>
          <li>
            <FontAwesomeIcon icon={this.props.icon}/> &nbsp;
            { this.props.listItem }
          </li>
        </ul>
      </Content>
    );
  }
}

export default ListWithIcons;
