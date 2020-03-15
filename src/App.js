import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

/*
 * Class Way of Doing things
 *
*/
class App extends Component {
  state = {

    persons: [
      {id: 'werrte',name:"Taneesh", age: 9},
      {id: 'rttrey',name:"Praveen", age: 43},
      {id: 'eyyyer',name:"Mayuri", age: 36}
    ],
    noOfClicks: 0,
    showPersons: false
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
        border: '1px solid blue'
      }
    };

    let personsVar = null;

    if (this.state.showPersons) {
      personsVar = (
        <div key>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.changeHandler(event, person.id)}
                        click={() => this.deletePersonHandler(index)}/>
            })
          }
          </div> 
      );
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
        border: '1px solid blue'
      };
      
    }
    let classes = [];

    if (this .state.persons.length <= 2) {
      classes.push('red'); //classes = ['red'];
    }

    if (this .state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red'];
    }
    return (
      <StyleRoot>
        <div className="App">
          <h>Hi, I'm a React App</h>
          <p className={classes.join(' ')}>This is really working</p>
          <button key='button1' style={style} onClick={this.incrementCountHandler}>Increment</button>
          <button key='button2' style={style} onClick={this.changeCountHandler.bind(this, 2)}>Count 2</button>
          <button key='button3' style={style} onClick={this.togglePersonHandler}>Show</button>
          {personsVar}
          <p> No of clicks : {this.state.noOfClicks}</p>
        </div>
      </StyleRoot>
    );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  changeCountHandler = (newCount) => {
    this.setState ({
      // persons: [
      //   {name: "Taneesh", age: 9},
      //   {name: "Praveen", age: 43},
      //   {name: "Mayuri", age: 36}
      // ],
      noOfClicks: newCount
    });

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  incrementCountHandler = () => {
    const oldCount = this.state.noOfClicks;
    this.setState({noOfClicks: oldCount +1});
  }

  switchNameHandler = (newTName) => {
    this.setState ({
      persons: [
        {name: newTName, age: 10},
        {name: "Praveen", age: 43},
        {name: "Mayuri", age: 36}
      ],
      noOfClicks: 1
    });
  }

  changeHandler = (event, id ) => {
    const personIndex = this. state.persons.findIndex( p=>{
      return p.id === id;
    });
    // alert('Index:'.concat(personIndex));
    const personToBeUpdated = {
      ...this.state.persons[personIndex]
    };

    personToBeUpdated.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = personToBeUpdated;


    this.setState ({
      persons: updatedPersons
    });   
  }
}

export default Radium(App);
