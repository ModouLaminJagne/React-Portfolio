import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  
  // function formatName(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }
  
  // const user = {
  //   firstName: 'Harper',
  //   lastName: 'Perez',
  // };
  
  
  // function getGreeting() {
  //   if (user) {
  //     return <h1>Hello, {formatName(user)}!</h1>;
  //   }
  //   return <h1>Hello, Stranger.</h1>;
  // }
  // const element = <h1> {getGreeting()}</h1>;
  
  // ReactDOM.render(
  //   // <grtGreeting />,
  //   element,
  //   document.getElementById('root')
  // );
