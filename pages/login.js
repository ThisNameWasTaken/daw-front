import React from 'react';
import useForm from 'react-hook-form';
import { Button, Grid, Paper, TextField, makeStyles } from '@material-ui/core';

import ButtonLink from '../components/button-link';

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

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classNames.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              className={classNames.textField}
              inputRef={register({ required: true })}
              error={!!errors['username']}
              helperText={errors['username'] && 'Username is required'}
            />
            <TextField
              label="Password"
              name="password"
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
