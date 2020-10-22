import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import Header from "./Header";
import QuizForm from "./Quiz/QuizForm";
import Question from "./Question";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import User from "./User";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route
              exact
              path="/quiz"
              render={(props) => <QuizForm {...props} form="quiz" />}
            />
            <Route exact path="/addQuestion" component={Question} />
            <Route exact path="/users" component={User} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
