import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

import Question from "./Question";

class Quiz extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderContent() {
    if (this.props.questions) {
      return this.props.questions.map((question) => {
        console.log(question);
        return <Question key={question._id} question={question} />;
      });
    }

    return;
  }

  render() {
    return (
      <div className="">
        <ul className="collection">{this.renderContent()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ quiz }) {
  return { questions: quiz.questions };
}

export default connect(mapStateToProps, actions)(Quiz);
