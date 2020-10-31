import React from 'react';

import Login from './Login';

export default () => {
  return (
    <div
      className="grey darken-4 white-text valign-wrapper"
      style={{ height: '100vh' }}
    >
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l6 center-align">
            <h1 style={{ fontWeight: 'bold' }}>MJE Coach</h1>
            <h3>Time Triad App</h3>
            <p style={{ fontWeight: 'bold' }}>Family -> Work -> Life</p>
          </div>

          <div className="col s12 m12 l6">
            <p className="center-align">Choose a login method</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};
