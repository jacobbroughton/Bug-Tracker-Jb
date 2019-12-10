import React, { Component } from 'react';
import { connect } from "react-redux";
import { action } from "./actions/action";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import './App.css';

const App = () => {

  // constructor(props) {
  //   super(props)
  //   this.action = this.action.bind(this);
  // }

  // action = (event) => {
  //   this.props.action();
  // }

  // render() {

    const { loading } = useAuth0();

    if(loading) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <NavBar/>
        <h1>Hello World</h1>
        {/* <pre>
          <h2>
            {
              JSON.stringify(this.props.reducer)
            } 
          </h2>
        </pre> */}
        {/* <button onClick={this.action}>Test Redux</button> */}
      </div>
    );
  }

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(action())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
