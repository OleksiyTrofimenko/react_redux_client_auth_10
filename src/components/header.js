import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderLinks() {
    if (this.props.auth) {
      return (
        [
          <Link className="item" to='/signout'>Sign out</Link>,
          <Link className="item" to='/feature'>Feature</Link>
        ]
      )
    } else {
      return (
        [
          <Link className="item" to='/signup'>Sign up</Link>,
          <Link className="item" to='/signin'>Sign in</Link>
        ]
      )
    }
  }

  render() {
    return (
      <div className="ui menu">
        <Link className="item" to='/'>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(Header);
