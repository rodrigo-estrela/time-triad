import React from "react";

class Question extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <li className="row collection-item valign-wrapper">
        <label className="col s8" htmlFor={question._id}>
          {question.description}
        </label>
        <select name={question.group} className="browser-default col s4">
          <option value="" disabled selected></option>
          <option value="1">Nunca</option>
          <option value="2">Raramente</option>
          <option value="3">As vezes</option>
          <option value="4">Quase sempre</option>
          <option value="5">Sempre</option>
        </select>
      </li>
    );
  }
}

export default Question;
