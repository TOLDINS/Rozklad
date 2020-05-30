import React, { Component } from "react";
import "./app.css";
import ErrorMessage from "../ErrorMessage";
import { dummy_schedule } from "../../services/dummy_schedule.json";
import ErrorBoundary from "../ErrorBoundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    hasError: false,
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onServiceChange = () => {
   
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage/>;
    }

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
          <Router>
            <div className='scheduler'>
              <Switch>
                
              </Switch>
            </div>
          </Router>
      </ErrorBoundary>
    );
  }
}

export default App;