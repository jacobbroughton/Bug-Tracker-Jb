import React, { Component } from 'react';
import { connect } from "react-redux";
import { action } from "./actions/action";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.action = this.action.bind(this);
  }

  action = (event) => {
    this.props.action();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <pre>
          {
            JSON.stringify(this.props.reducer)
          }
        </pre>
        <button onClick={this.action}>Test Redux</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(action())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
