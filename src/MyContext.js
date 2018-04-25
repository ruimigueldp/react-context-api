import React, { Component } from 'react';

const MyContext = React.createContext();
export class Provider extends Component {
  state = {
    viewer: null
  };

  logIn = (name) => {
    this.setState({ viewer: name });
  }
  logOut = () => this.setState({ viewer: null });

  render () {
    return (
      <MyContext.Provider
        value={{
          viewer: this.state.viewer,
          logIn:this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export const Consumer = MyContext.Consumer;
