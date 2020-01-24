import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { handleAuthSsr } from '../services/auth';

export default function withPrivateRoute(WrappedComponent) {
  return class extends Component {
    static async getInitialProps(context) {
      const { token } = handleAuthSsr(context);

      const decodedToken = jwtDecode(token);

      if (WrappedComponent.getInitialProps) {
        const otherProps = await WrappedComponent.getInitialProps(context, {
          token,
          decodedToken,
        });

        return { token, decodedToken, ...otherProps };
      }

      return { token, decodedToken };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
