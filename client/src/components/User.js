import React from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";


class User extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }


  render() {
    const { users } = this.props;

    if(this.props.users.length === 0) {
      return <div className=""></div>
    }

    return(
      <ul className="collection">
      {users.map(user => {
        return(
          <li key={user.email} className="collection-item">
            <div className="row">
              <div className="col s3">
                <img src={user.picture} alt="usuario"/>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </li>
        )
      })}
      </ul>
    )
  }
}

function mapStateToProps({ users }) {
  return {users}
}

export default connect(mapStateToProps, actions)(User);