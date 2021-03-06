import React from 'react';

import Header from './Header';
import QuizForm from './quiz-items/QuizForm';

function Quiz() {
  return (
    <div className="">
      <Header />

      <div className="container">
        <p className="teal-text center-align" style={{ fontWeight: 'bold' }}>
          Please, answer the questions bellow to get your time triad
        </p>
        <QuizForm />
      </div>
    </div>
  );
}

export default Quiz;
