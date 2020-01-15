import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import { Button, Grid, Paper, TextField, makeStyles } from '@material-ui/core';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import ButtonLink from '../components/button-link';
import { UserContext } from '../services/user';

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 400,
    padding: theme.spacing(3),
    margin: 'auto',
    marginTop: theme.spacing(6),
  },
  textField: {
    width: '100%',
    margin: theme.spacing(0, 0, 3, 0),
  },
  loginButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Login = () => {
  const classNames = useStyles({});

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm();

  const { logInUser } = useContext(UserContext);

  const logIn = async data => {
    console.log({ data });

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error((await response.json()).error);

      const { token } = await response.json();

      Cookies.set('token', token);
      await logInUser();
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classNames.paper}>
          <form onSubmit={handleSubmit(logIn)} autoComplete="on">
            <TextField
              label="Username"
              name="username"
              autoComplete="username"
              variant="outlined"
              className={classNames.textField}
              inputRef={register({ required: true })}
              error={!!errors['username']}
              helperText={errors['username'] && 'Username is required'}
            />
            <TextField
              label="Password"
              name="password"
              autoComplete="current-password"
              variant="outlined"
              className={classNames.textField}
              inputRef={register({ required: true })}
              type="password"
              error={!!errors['password']}
              helperText={errors['password'] && 'Password is required'}
            />

            <Grid container direction="row-reverse">
              <Button
                variant="contained"
                color="primary"
                className={classNames.loginButton}
                type="submit"
              >
                Log In
              </Button>

              <ButtonLink color="primary" href="/register">
                Register
              </ButtonLink>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
