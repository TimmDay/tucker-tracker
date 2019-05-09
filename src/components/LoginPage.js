import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginDemo } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle, startLoginDemo }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Tucker Tracker</h1>
      <p>Track your Tucker-sellers</p>
      <div className='login__btn-bar'>
        <button className="login__btn" onClick={startLoginGoogle}>Login with Google</button>
        <button className="login__btn" onClick={startLoginDemo}>View DEMO</button>
      </div>
      <p>(tucker is Australian for food)</p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginDemo: () => dispatch(startLoginDemo('demo'))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
