import React from 'react';
import'./style.css';
import Login from "./Login.js";
import RegisterForm from "./RegisterForm.js";

class App extends React.Component
{
  render()
  {
    return (<div>
                <RegisterForm></RegisterForm>
                <br></br>
                <Login></Login>
            </div>)
  }
}
export default App; 