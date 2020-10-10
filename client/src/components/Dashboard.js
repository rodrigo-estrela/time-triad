import React from "react";
import { connect } from "react-redux";

import QuizResult from "./Quiz/QuizResult";
import Loading from "./Loading";

class Dashboard extends React.Component {
  render() {
    if (this.props.auth) {
      return <QuizResult />;
    }

    return <Loading />;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
