import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

import theme from '../components/theme';
import Layout from '../layouts/layout';
import { UserContext, getUserData } from '../services/user';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  setUserData = userData => {
    this.setState({ userData });
  };

  state = {
    userData: null,
    setUserData: this.setUserData,
  };

  async componentWillMount() {
    const token = Cookies.get('token');
    const { id } = jwtDecode(token);

    this.setState({ userData: await getUserData(id) });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <UserContext.Provider value={this.state}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserContext.Provider>
        </ThemeProvider>
      </>
    );
  }
}
