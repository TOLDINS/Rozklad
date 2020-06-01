import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

import ErrorMessage from "../ErrorMessage";
import ErrorBoundary from "../ErrorBoundary";
import Home from "../Home";
import "./app.css";
import { SignIn, SignUp } from "../Authorization";

class App extends Component {
  state = {
    hasError: false,
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <Router>
          <div className='scheduler'>
            <Switch>
              <Route path='/' exact component={isLoggedIn ? Home : SignIn} />
              <Route path='/signin' exact component={isLoggedIn ? Home : SignIn} />
              <Route path='/signup' exact component={isLoggedIn ? Home : SignUp} />
              <ProtectedRoute path='/sp' exact component={Home} />
              <Route path='*' component={()=> "404"} />
            </Switch>
          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
