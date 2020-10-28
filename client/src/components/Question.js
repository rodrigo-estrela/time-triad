import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";

import Header from './Header';

class Question extends React.Component {
  render() {
    const { handleSubmit, postQuestion } = this.props;
    return (
      <div className="">
        <Header />
        
        <form onSubmit={handleSubmit(postQuestion)}>
          <div className="row">
            <label htmlFor="id">Question ID</label>
            <Field
              component="input"
              name="id"
              placeholder="ID"
              autoComplete="off"
            />
            <label htmlFor="description">Question</label>
            <Field
              component="textarea"
              name="description"
              placeholder="Type the question here"
              autoComplete="off"
            />
            <label>Question Group</label>
            <Field component="select" name="group" className="browser-default">
              <option value="" disabled defaultValue></option>
              <option value="importante">Importante</option>
              <option value="urgente">Urgente</option>
              <option value="circunstancial">Circunstancial</option>
            </Field>
          </div>
          <div className="row">
            <button className="btn right" type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Question = connect(null, actions)(Question);

export default reduxForm({
  form: "addQuestion",
})(Question);
