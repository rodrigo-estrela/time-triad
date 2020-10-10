import React from "react";
import { Field } from "redux-form";

const Question = (props) => {
  const { question } = props;

  return (
    <Field
      name={question.id}
      label={question.description}
      component={renderField}
      validate={required}
    />
  );
};

const renderField = ({ input, label, meta: { touched, error } }) => {
  return (
    <li className="row collection-item valign-wrapper">
      <label className="col s8 x9" htmlFor={input.name}>
        {label}
      </label>
      <div className="browser-default col s4 x3">
        <select {...input} className="browser-default z-depth-1">
          <option />
          <option value="1">Nunca</option>
          <option value="2">Raramente</option>
          <option value="3">As vezes</option>
          <option value="4">Quase sempre</option>
          <option value="5">Sempre</option>
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    </li>
  );
};

const required = (value) => (value ? undefined : "Preenchimento Obrigatório!");

export default Question;
