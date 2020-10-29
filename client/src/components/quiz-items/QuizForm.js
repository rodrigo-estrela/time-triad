import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as actions from '../../actions';
import QuizItem from './QuizItem';

class QuizForm extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderContent = () => {
    if (this.props.questions) {
      var questionsToBeRendered;
      if (!this.props.group) {
        questionsToBeRendered = this.props.questions;
      } else {
        questionsToBeRendered = this.props.questions.filter(
          (question) => question.group === this.props.group
        );
      }
      return questionsToBeRendered.map((question) => {
        return <QuizItem key={question._id} question={question} />;
      });
    }
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.postQuiz)} className="">
        <div className="row">
          <ul className="collection">{this.renderContent()}</ul>
        </div>

        <div className="row">
          <button
            className="btn waves-effect waves-light right"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ auth, quiz }) {
  return { auth, questions: quiz.questions };
}

QuizForm = connect(mapStateToProps, actions)(QuizForm);

export default reduxForm({
  form: 'quiz',
})(QuizForm);
