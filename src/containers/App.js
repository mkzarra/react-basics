import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';

export const AuthContext = React.createContext(false)

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] inside constructor', props)
      this.state = {
        persons: [
          { id: 'ad8', name: 'Mike', age: 27 },
          { id: 'fw7', name: 'Catherine', age: 28 },
          { id: 's3q', name: 'Nathan', age: 43 }
        ],
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
    }
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
    this.setState((prevState, props) => {
      return {  
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  // static method is not attatched to a single instance
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(
  //     "[UPDATE App.js] Inside getDerivedStateFromProps",
  //     nextProps,
  //     prevState
  //   )

  //   return prevState
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate")
  //    return null
  // }

  // componentDidUpdate() {
  //       console.log("[UPDATE App.js] Inside componentDidUpdate")

  // }

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
    
      <>
        <Cockpit
          appTitle={this.props.title}
          clicked={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
        
        </>
        
    );
  }
}

export default withClass(App, classes.App);
