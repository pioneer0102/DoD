import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import { useEffect } from 'react';
import jwtService from '../../auth/services/jwtService';
import styles from './style.module.scss';

/**
 * Form Validation Schema
 * 123
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(4, 'Password is too short - must be at least 4 chars.'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

function SignInPage() {
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setValue('email', 'admin@fusetheme.com', { shouldDirty: true, shouldValidate: true });
    setValue('password', 'admin', { shouldDirty: true, shouldValidate: true });
  }, [setValue]);

  function onSubmit({ email, password }) {
    jwtService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // No need to do anything, user data will be set at app/auth/AuthContext
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      });
  }

  return (
    <>
      <div className={`flex flex-col items-center sm:justify-center md:justify-center flex-1 min-w-0 ${styles.container}`}>
        <div className={`${styles.back_blur}`}></div>
        <div className={`flex flex-col items-center h-100 md:items-center py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none ltr:border-r-1 rtl:border-l-1 ${styles.back}`}>
          <div className={`w-full max-w-320 sm:w-320 mx-auto sm:mx-0`}>
            <Typography className="mt-32 text-4xl font-extrabold">
              DoD Gaming Community
            </Typography>

            <form
              name="loginForm"
              noValidate
              className="flex flex-col justify-center w-full mt-32"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Email"
                    autoFocus
                    type="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                <Controller
                  name="remember"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormControlLabel
                        className='text-gray-50'
                        label="Remember me"
                        control={<Checkbox size="small" {...field} />}
                      />
                    </FormControl>
                  )}
                />

                <Link className="text-md font-medium" to="/" style={{ color: 'tomato' }}>
                  Forgot password?
                </Link>
              </div>

              <Button
                variant="contained"
                color="error"
                className=" w-full mt-16 btn-primary-art"
                aria-label="Sign in"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
                size="large"
              >
                Sign in
              </Button>

              <div className="flex items-center mt-24">
                <div className="flex-auto mt-px border-t" />
                <Typography className="mx-8" color="white">
                  Or continue with
                </Typography>
                <div className="flex-auto mt-px border-t" />
              </div>
            </form>

            <div className="flex mt-24 font-medium">
              <Typography color="white">Don't have an account?</Typography>
              <Link className="ml-8" to="/" style={{ color: 'tomato' }}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
