import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'

class Person extends Component {

  componentDidMount() {
    if (this.props.pos === 0) {
    this.inputElement.focus()
    }
  }

  render () {
  return (
    <>
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input
        ref={(inp) => { this.inputElement = inp }}
        type="text"
        onChange={this.props.changed}
        value={this.props.name} />
    </>
    )
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);