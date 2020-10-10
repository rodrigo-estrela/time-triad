import React from "react";
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }

  componentDidMount() {
    const elems = document.querySelectorAll(".dropdown-trigger");
    const options = {
      alignment: "botton",
      coverTrigger: false,
      constrainWidth: false,
    };
    const instances = this.M.Dropdown.init(elems, options);
  }

  render() {
    return (
      <div className="">
        <li>
          <a className="dropdown-trigger large" href="" data-target="dropdown1">
            Ferramentas
            <i class="large material-icons right">arrow_drop_down</i>
          </a>
        </li>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/quiz">Triade do Tempo</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
