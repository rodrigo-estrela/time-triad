import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';
import QuizResult from './quiz-items/QuizResult';
import Loading from './Loading';

class Dashboard extends React.Component {
  render() {
    if (this.props.auth) {
      if (this.props.auth.timeTriad.done) {
        return (
          <div className="">
            <Header />

            <div className="container">
              <h5 className="teal-text center-align">
                Model: {this.props.auth.timeTriad.model}
              </h5>
              <QuizResult />
            </div>
          </div>
        );
      }

      return (
        <div>
          <Header />

          <div className="container">
            <Link to="/quiz">Clique Aqui para responder ao questionário</Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Loading />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
