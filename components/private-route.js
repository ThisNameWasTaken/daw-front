import React, { Component } from 'react';
import { handleAuthSsr } from '../services/auth';
import Cookies from 'js-cookie';

export default function withPrivateRoute(WrappedComponent) {
  return class extends Component {
    static async getInitialProps(context) {
      const { token } = handleAuthSsr(context);

      if (WrappedComponent.getInitialProps) {
        const otherProps = await WrappedComponent.getInitialProps(context);

        return { token, ...otherProps };
      }

      return { token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
