import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap"


import Person from'./Person';

import DATA_PEOPLE from "./data/people.json"

// [
//   {
//         id: 0,
//         name: "Muhammad",
//         age: 40,
//         email: "gue@gue.com"
//     },

//     {   
//         id: 1,
//         name: "Ahmed",
//         age: 30,
//         email: "gue@askjdf.com"
//     },

//     {
//         id: 2,
//         name: "Ridwan",
//         age: 30,
//         email: "gue@laskjdf.com"
//     }

// ]



class App extends React.Component {
  render() {
    return (
      <div>
        {DATA_PEOPLE.map(person => {
          return (
            <Person 
            key={person.id}
            name={person.name}
            age={person.age}
            email={person.email}
            />
          ) 
        })}
      </div> 

      )
  }
}

export default App;


// export default App

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
