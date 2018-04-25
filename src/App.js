import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, Consumer } from './MyContext';

const Nav = () => <LoginForm />;

class LoginForm extends Component {
  state = {

  };
  render() {
    return (
      <Consumer>
        {value => {
          const { viewer, logIn, logOut } = value;

          return viewer ? (
            <React.Fragment>
              <h3>Logged in As: {viewer}</h3>
              <button onClick={logOut}>Log Out</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input placeholder="Name please"
                ref={ r => this.inputRef = r}
              />
              <button type="submit" onClick={() => {
                logIn(this.inputRef.value);
              }}>Log in</button>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Consumer>
              {({ viewer }) => (
                <h1 className="App-title">{viewer ? `Welcome ${viewer}!` : 'Log in, please!'}</h1>
              )}
            </Consumer>
          </header>
          <div className="App-intro">
            <Nav />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
