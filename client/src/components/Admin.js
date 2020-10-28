import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Loading from './Loading';

class Admin extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    if (this.props.users.length === 0) {
      return (
        <div className="">
          <Header />

          <div className="container">
            <Loading />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />

        <div className="container">
          <ul id="users-container" className="collection">
            {users.map((user) => {
              return (
                <li key={user.email} className="collection-item avatar">
                  <img src={user.picture} alt="usuario" className="circle" />
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, actions)(Admin);
