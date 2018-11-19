import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] inside constructor', props)
  }
  

  state = {
    persons: [
      { id: 'ad8', name: 'Mike', age: 27 },
      { id: 'fw7', name: 'Catherine', age: 28 },
      { id: 's3q', name: 'Nathan', age: 43 }
    ],
    showPersons: false
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
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletPersonHandler}
        changed={this.nameChangeHandler}
      />      
    }

    return (
    
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          clicked={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />
        {persons}
        </div>
        
    );
  }
}

export default App;
