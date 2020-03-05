import React, {Component} from 'react';
import { Card } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { HomeCard } from "./CarWithIconStyled";


class CardWithIcon extends Component {

  cardContentProp;
  cardIcon;

  render() {
    return (
      <HomeCard>
        <Card.Body className='card-body'>
          <Card.Title>
            <FontAwesomeIcon size='2x' icon={this.props.cardIcon}/>
          </Card.Title>
          <Card.Text >
            {this.props.cardContentProp}
          </Card.Text>
        </Card.Body>
      </HomeCard>
    );
  }
}

export default CardWithIcon;
