import React, {Component} from 'react';
import {Form} from "react-bootstrap";

class RadioOrCheckbox extends Component {
  render() {
    return (
      <Form.Check
        custom
        type={this.props.type}
        label={this.props.label}
        name={this.props.name}
        id={this.props.id}
      />
    );
  }
}

export default RadioOrCheckbox;
