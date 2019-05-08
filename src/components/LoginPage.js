import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Tucker Tracker</h1>
      <p>Track your Tucker-sellers</p>
      <button className="button" onClick={startLoginGoogle}>Login with Google</button>
      <p>(tucker is Australian for food)</p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLoginGoogle())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
