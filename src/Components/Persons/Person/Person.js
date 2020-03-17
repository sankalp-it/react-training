import React from 'react';
import classes from './Person.css';

const person = ( props ) => {
    return  (
        <div className={classes.Person}>
        <p onClick={props.click}>IAm  {props.name} ! My age is {props.age}</p>
        <input type="text" onChange={props.changed} value={props.name} key={props.key}></input>
        {/* </StyledDiv> */}
        </div>
    );
}

export default person;