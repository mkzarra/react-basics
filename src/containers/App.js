import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [
      { id: 'ad8', name: 'Mike', age: 27 },
      { id: 'fw7', name: 'Catherine', age: 28 },
      { id: 's3q', name: 'Nathan', age: 43 }
    ]
  }

  deletPersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null
    let btnClass = ''
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.deletPersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
          })}
            
          </div>
      )
      
      btnClass = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
    
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')} >This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        </div>
        
    );
  }
}

export default App;
