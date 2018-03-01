/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'

import Profile from './Profile';

const mapStateToProps = ({ user, }) => ({ user, });

const mapActionsToProps = {}

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(Profile)
