import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Mike', age: 27 },
        { name: event.target.value, age: 28 },
        { name: 'Nathan', age: 43}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletPersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          })}
            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              changed={this.nameChangeHandler}
              click={this.switchNameHandler.bind(this, 'Mikey')}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>Hobbies: Knitting</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            /> */}
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
