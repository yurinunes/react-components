import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

class ItineraryTable extends Component {
  render() {
    return (
      <Row noGutters={true} className='itinerary-table' >
        {this.props.children}
        <Col lg={this.props.colDays}>
          <p>{this.props.days}</p>
        </Col>
        <Col lg={this.props.colCity}>
          <ul>
            <li>{this.props.city}</li>
          </ul>
        </Col>
        <Col lg={this.props.colDescription}>
          <p>{this.props.description}</p>
        </Col>
      </Row>
    );
  }
}

export default ItineraryTable;
