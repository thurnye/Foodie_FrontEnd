import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm, SubmitHandler } from 'react-hook-form';

import services from '../../../util/services';
import { userActions } from '../../../store/userSlice';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';
import { decodeJWToken } from '../../../util/commons';
import { isValidEmail } from '../../../shared/utils/security.utils';
import { loginUser } from '../redux/slice/asyncThunkServices';
import { useAppDispatch } from '../../../app/hooks/app.hooks';
import { AUTH_ERROR_MESSAGES } from '../constants/auth.constants';
import Google from '../services/Google';

interface ILoginFormInputs {
  email: string;
  password: string;
}

const defaultTheme = createTheme();

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // RHF form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ILoginFormInputs>({
    mode: 'onTouched',
    defaultValues: {
      email: 'testprogram404@gmail.com',
      password: 'Password123!',
    },
  });

  

  const onSubmit: SubmitHandler<ILoginFormInputs> = async (data) => {
    // basic validation
    if (!isValidEmail(data.email)) {
      setError('email', { message: 'Please enter a valid email address' });
      return;
    }
    if (data.password.length < 6) {
      setError('password', {
        message: 'Password must be at least 6 characters',
      });
      return;
    }

    try {
      await dispatch(
        loginUser({ email: data.email, password: data.password })
      ).unwrap();
      navigate('/');
    } catch (err: any) {
      console.log(err)
      setError('root', {
        message: err.message || AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
      });
    }
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>

            {/* RHF form */}
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
                autoFocus
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Enter a valid email',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />

              <TextField
                margin='normal'
                fullWidth
                type='password'
                id='password'
                label='Password'
                autoComplete='current-password'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />

              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                disabled={isSubmitting}
                sx={{ mt: 3, mb: 2 }}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>

              {/* Sign in with Google */}
              <Box sx={{ mb: 3 }}>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  width='100%'
                  my={2}
                >
                  <Box flexGrow={1} borderBottom='1px solid #cecece' />
                  <Typography variant='body2' mx={2} color='text.secondary'>
                    or
                  </Typography>
                  <Box flexGrow={1} borderBottom='1px solid #cecece' />
                </Box>
                <Google />
              </Box>

              <Grid container>
                <Grid item xs>
                  <Link href='/forgotPassword' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/signup' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            sx={{ mt: 8, mb: 4 }}
          >
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>

          {/* <RequestFeedback
            successMessage={message}
            errorMessage={message}
            open={open}
            setOpen={setOpen}
            loading={isSubmitting}
            isError={isError}
            saved={saved}
            showCancel={showCancel}
            handleError={() => setOpen(!open)}
            errorBtnLabel="Close"
            handleSuccess={() => {
              setOpen(!open);
              navigate('/all');
            }}
            successBtnLabel="Close"
          /> */}
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Login;
