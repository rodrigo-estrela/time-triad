import React from "react";
import { connect } from "react-redux";

import QuizForm from "./QuizForm";

class QuizResult extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }

  componentDidMount() {
    const elems = document.querySelectorAll(".collapsible");
    const instances = this.M.Collapsible.init(elems);
  }

  render() {
    const { importante, urgente, circunstancial } = this.props.auth.timeTriad;

    return (
      <ul className="collapsible popout">
        <li>
          <div className="collapsible-header valign-wrapper teal lighten-5">
            <i className="material-icons">arrow_drop_down_circle</i>
            <h5>Esfera Importante: {importante}%</h5>
          </div>
          <div className="collapsible-body">
            <QuizForm
              group="importante"
              form="importante"
              initialValues={{
                i0: this.props.initialValues.i0,
                i1: this.props.initialValues.i1,
                i2: this.props.initialValues.i2,
                i3: this.props.initialValues.i3,
                i4: this.props.initialValues.i4,
                i5: this.props.initialValues.i5,
              }}
            />
          </div>
        </li>
        <li>
          <div className="collapsible-header valign-wrapper lime lighten-5">
            <i class="material-icons">arrow_drop_down_circle</i>
            <h5>Esfera Urgente: {urgente}%</h5>
          </div>
          <div className="collapsible-body">
            <QuizForm
              group="urgente"
              form="urgente"
              initialValues={{
                u0: this.props.initialValues.u0,
                u1: this.props.initialValues.u1,
                u2: this.props.initialValues.u2,
                u3: this.props.initialValues.u3,
                u4: this.props.initialValues.u4,
                u5: this.props.initialValues.u5,
              }}
            />
          </div>
        </li>
        <li>
          <div className="collapsible-header valign-wrapper red lighten-5">
            <i class="material-icons">arrow_drop_down_circle</i>
            <h5>Esfera Circunstancial: {circunstancial}%</h5>
          </div>
          <div className="collapsible-body">
            <QuizForm
              group="circunstancial"
              form="circunstancial"
              initialValues={{
                c0: this.props.initialValues.c0,
                c1: this.props.initialValues.c1,
                c2: this.props.initialValues.c2,
                c3: this.props.initialValues.c3,
                c4: this.props.initialValues.c4,
                c5: this.props.initialValues.c5,
              }}
            />
          </div>
        </li>
      </ul>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth, initialValues: auth.timeTriad.quiz };
}

export default connect(mapStateToProps)(QuizResult);
