import React from 'react';
import './Person.css';
import styled from 'styled-components';
import Radium, {StyleRoot}from 'radium';
//impo
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     @media (min-width: 500px): {
//         width: '450px'
//     }
// `;
const person = ( props ) => {
    const style ={
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return  (
        <div className="Person" style={style}> 
        {/* <StyledDiv> */}
        
        <p onClick={props.click}>IAm  {props.name} ! My age is {props.age}</p>
        <input type="text" onChange={props.changed} value={props.name} key={props.key}></input>
        {/* </StyledDiv> */}
        </div>
    );
}

export default Radium(person);