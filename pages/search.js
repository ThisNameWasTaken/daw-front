import React from 'react';
import withPrivateRoute from '../components/private-route';

const Search = () => (
  <>
    <p>Hello Search</p>
  </>
);

export default withPrivateRoute(Search);
