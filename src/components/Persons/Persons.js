import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor() {
    super()
    this.lastPersonRef = React.createRef()
  }

  componentDidMount() {
    this.lastPersonRef.current.focus()
  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        pos={index}
        click={() => this.props.clicked(index)}
        ref={this.lastPersonRef}
        name={person.name}
        age={person.age}
        changed={event => this.props.changed(event, person.id)}
      />
    })
  }
}

export default Persons