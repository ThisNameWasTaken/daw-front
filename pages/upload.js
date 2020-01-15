import React from 'react';
import withPrivateRoute from '../components/private-route';

const Upload = () => (
  <>
    <p>Hello Upload</p>
  </>
);

export default withPrivateRoute(Upload);
