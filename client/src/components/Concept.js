import React from 'react';
import Header from './Header';

const text = {
  important:
    'It is directly related to the activities that we carry out and that are relevant in our lives. Activities that bring results in the short, medium or long term. In general, important things have lead times, but they are never urgent. Important activities provide pleasure when performed, most of which are spontaneous.',
  urgent:
    'This domain covers all activities for which time is short, on the limit or has already run out. These are demands that arrive at the last minute and cannot be predicted. In general, they end up bringing pressure and stress.',
  circunstantial:
    'It concerns unnecessary activities, as they are considered appropriate by society, excessive or without results. It is useless spending of time, such as extra hours in bed, checking social networks and other activities done for convenience several times a day. They do not bring results and there is a high potential to generate only frustrations.',
};

function Concept() {
  return (
    <div className="">
      <Header />

      <div className="container">
        <h3>Important Domain</h3>
        <p>{text.important}</p>
        <div className="divider"></div>
        <h3>Urgent Domain</h3>
        <p>{text.urgent}</p>
        <div className="divider"></div>
        <h3>Circunstantial Domain</h3>
        <p>{text.circunstantial}</p>
      </div>
    </div>
  );
}

export default Concept;
