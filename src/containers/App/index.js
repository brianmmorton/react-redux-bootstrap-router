/* @flow */

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { fetch as fetchUser } from 'store/user'

import App from './App';

const mapStateToProps = ({ user, }) => ({ user, });

const mapActionsToProps = { fetchUser }

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )
)(App)
