import React from 'react';
import { useRouter } from 'next/router';
import useForm from 'react-hook-form';
import { Button, Grid, Paper, TextField, makeStyles } from '@material-ui/core';

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
}));

const Login = () => {
  const classNames = useStyles({});

  const { register, handleSubmit, errors } = useForm();

  const router = useRouter();

  const onSubmit = data => {
    console.log(data);
    router.push('/');
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classNames.paper}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
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
              autoComplete="new-password"
              variant="outlined"
              className={classNames.textField}
              inputRef={register({ required: true })}
              type="password"
              error={!!errors['password']}
              helperText={errors['password'] && 'Password is required'}
            />
            <TextField
              label="Password match"
              name="passwordMatch"
              autoComplete="new-password"
              variant="outlined"
              className={classNames.textField}
              inputRef={register({ required: true })}
              type="password"
              error={!!errors['passwordMatch']}
              helperText={
                errors['passwordMatch'] &&
                'Please reenter the password to ensure you typed it correctly'
              }
            />

            <Grid container direction="row-reverse">
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
