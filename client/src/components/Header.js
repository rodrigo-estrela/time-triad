import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

class Header extends React.Component {
  constructor() {
    super();
    this.M = window.M;
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = this.M.Sidenav.init(elems);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a className="btn" href="/auth/google">
              Login com Google
            </a>
          </li>
        );

      default:
        const menus = [];
        if (this.props.auth.role === 'admin') {
          menus.push(
            <li key="1">
              <Link to="/users">Admin</Link>
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
              <Link to="/users">Admin</Link>
            </li>
          );
        }

        menus.push(
          <li key="2">
            <Link to="/quiz">Tríade do Tempo</Link>
          </li>
        );
        menus.push(
          <li key="3">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        );
        menus.push(
          <li key="4">
            <Link to="/">Conceito</Link>
          </li>
        );
        return menus;
    }
  }

  render() {
    return (
      <div className="">
        <nav className="purple darken-4">
          <div className="nav-wrapper">
            <Link to="/" className="left brand-logo hide-on-med-and-down">
              <i className="large material-icons">star_border</i>
              MJE Coach
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right">
              <li>
                <a
                  className="btn-small"
                  href={this.props.auth ? '/api/logout' : '/auth/google'}
                >
                  {this.props.auth ? 'Logout' : 'Login com Google'}
                </a>
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
