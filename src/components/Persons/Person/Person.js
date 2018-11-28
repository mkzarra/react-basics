import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { AuthContext } from '../../../containers/App'

import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()
  }

  componentDidMount() {
    // if (this.props.pos === 0) {
    //   this.inputElement.current.focus()
    // }
  }

  focus() {
    if (this.props.pos === 0) {
      this.inputElement.current.focus()
    }
  }

  render () {
  return (
    <>
      <AuthContext.Consumer>
        {auth => auth ? <p>I am authenticated!</p> : null}
      </AuthContext.Consumer>
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input
        ref={this.inputElement}
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