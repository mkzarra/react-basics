import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Mike', age: 27 },
      { name: 'Catherine', age: 28 },
      { name: 'Nathan', age: 43}
    ]
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Catherine', age: 28 },
        { name: 'Nathan', age: 42 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Micheal')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler.bind(this, 'Mikey')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          Hobbies: Knitting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
