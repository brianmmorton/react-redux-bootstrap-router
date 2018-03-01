import React, { Component } from 'react';

export default class Profile extends Component {
  render () {
    return (
      <div>
        Profile {JSON.stringify(this.props.user.data)}
      </div>
    )
  }
}
