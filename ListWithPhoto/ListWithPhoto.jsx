import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Row} from "react-bootstrap";

class ListWithPhoto extends Component {
  render() {
    return (
      <Row className='list-with-photo' noGutters={true}>
        <Col lg={this.props.colImg}>
          <img src={this.props.img} alt=""/>
        </Col>
        <Col lg={this.props.colContent}>
          <h2>{this.props.title}</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={this.props.icon}/>
              <h4>{this.props.subTitle}</h4>
              {this.props.text}
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default ListWithPhoto;
