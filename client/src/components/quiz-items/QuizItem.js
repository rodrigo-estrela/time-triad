import React from 'react';
import { Field } from 'redux-form';

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
    <li className="collection-item">
      <div className="row">
        <div className="col s12 m8 l9">
          <p htmlFor={input.name}>{label}</p>
        </div>
        <div className="col s12 m4 l3">
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
      </div>
    </li>
  );
};

const required = (value) => (value ? undefined : 'Preenchimento Obrigatório!');

export default Question;
