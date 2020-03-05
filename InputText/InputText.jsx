import React, {Component} from 'react';
import {Form} from "react-bootstrap";

class InputText extends Component {
  render() {
    return (
      <Form.Group controlId={this.props.controlId}>
        <Form.Control type={this.props.type} placeholder={this.props.placeholder} />
      </Form.Group>
    );
  }
}

export default InputText;
