import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function Routes() {
  return(
    <Router history={history}>
      <Switch>
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
      </Switch>
    </Router>
  )
}

export default Routes;