import React, { Component } from 'react';
import { handleAuthSsr } from '../services/auth';

export default function withPrivateRoute(WrappedComponent) {
  return class extends Component {
    static async getInitialProps(context) {
      const { token } = handleAuthSsr(context);

      if (WrappedComponent.getInitialProps) {
        const otherProps = await WrappedComponent.getInitialProps(context, {
          token,
        });

        return { token, ...otherProps };
      }

      return { token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
