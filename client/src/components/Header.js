import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        const menus = [];
        if (this.props.auth.role === "admin") {
          menus.push(
            <li key="1">
              <Link to="/addQuestion">Admin</Link>
            </li>
          );
        }

        menus.push(
          <li key="2">
            <Dropdown />
          </li>
        );

        menus.push(
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        );
        return menus;
    }
  }

  render() {
    return (
      <nav className="purple darken-4">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="left brand-logo"
          >
            <i className="large material-icons">star_border</i>
            MJE Coach
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
