import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import QuizResult from "./Quiz/QuizResult";
import Loading from "./Loading";

class Dashboard extends React.Component {
  render() {
    if (this.props.auth) {
      if (this.props.auth.timeTriad.done) {
        return <QuizResult />;
      }

      return (
        <div className="">
          <Link to="/quiz">Clique Aqui para responder ao questionário</Link>
        </div>
      );
    }

    return <Loading />;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
