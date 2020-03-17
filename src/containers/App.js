import React, { Component } from 'react';
//import React, { useState } from 'react';
import classes from './App.css';
//import styled from 'styled-components';
import Person from '../Components/Persons/Person/Person';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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

    let personsVar = null;
    let btnClasses = [classes.Button];

    if (this.state.showPersons) {
      personsVar = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                      <Person
                        name={person.name}
                        age={person.age}
                        
                        changed={(event) => this.changeHandler(event, person.id)}
                        click={() => this.deletePersonHandler(index)}/>
                      </ErrorBoundary>
            })
          }
          </div> 
      );
      btnClasses.push(classes.Red);
      // style.backgroundColor='red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      //   border: '1px solid blue'
      // };
      
    }
    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red'];
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red'];
    }
    return (
        <div className={classes.App}>
          <h>Hi, I'm a React App</h>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button key="button1" className={btnClasses.join(' ')} onClick={this.incrementCountHandler}>Increment</button>
          <button key="button2" className={btnClasses.join(' ')} onClick={this.changeCountHandler.bind(this, 2)}>Count 2</button>
          <button key="button3" className={btnClasses.join(' ')} onClick={this.togglePersonHandler}>Show</button>
          {personsVar}
          <p> No of clicks : {this.state.noOfClicks}</p>
        </div>
    );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  changeCountHandler = (newCount) => {
    this.setState ({
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
    const personIndex = this.state.persons.findIndex( p=>{
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

export default App;
