import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = this.M.Sidenav.init(elems);
  }

  renderNavItems(sideNav = false) {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        if (sideNav) {
          return <div className="">Faça o Login para visualizar as opções</div>;
        }
        return;

      default:
        const menus = [];
        if (this.props.auth.role === 'admin') {
          menus.push(
            <li key="1">
              <Link to="/admin">Admin</Link>
            </li>
          );
        }

        menus.push(
          <li key="2">
            <Link to="/quiz">Time Triad</Link>
          </li>
        );
        menus.push(
          <li key="3">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        );
        menus.push(
          <li key="4">
            <Link to="/">Concept</Link>
          </li>
        );
        return menus;
    }
  }

  render() {
    return (
      <div className="">
        <nav className="grey darken-4">
          <div className="nav-wrapper">
            <Link to="#" className="left brand-logo hide-on-med-and-down">
              MJE Coach
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right">
              <li>
                <a href="/api/logout">{this.props.auth ? 'Logout' : 'Login'}</a>
              </li>
            </ul>

            <ul className="right hide-on-med-and-down">
              {this.renderNavItems()}
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.renderNavItems(true)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
