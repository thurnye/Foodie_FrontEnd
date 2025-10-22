import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { gapi } from 'gapi-script';
import { Box } from '@mui/material';
import services from '../../../util/services';
import RequestFeedback from '../../../components/RequestFeedback/RequestFeedback';

// Define user data type
interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imageUrl: string;
  googleId: string;
}

// Type for your backend service return type (optional)
interface IServiceResponse {
  data: string; // assuming token string; adjust if backend sends an object
}

const Google: React.FC = () => {
  const [call, setCall] = useState<boolean>(false);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

  // Feedback States
  const [open, setOpen] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [showCancel, setShowCancel] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // ✅ Initialize Google API client
  useEffect(() => {
    const initClient = async () => {
      try {
        await gapi.client.init({
          clientId,
          scope: '',
        });
        console.log('Google API initialized');
      } catch (err) {
        console.error('Error initializing Google API', err);
      }
    };

    try {
      gapi.load('client:auth2', initClient);
    } catch (err) {
      console.error('Error loading Google API', err);
    }
  }, [clientId]);

  // ✅ On success callback
  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    // handle only online response (GoogleLoginResponse)
    if ('profileObj' in res) {
      try {
        setIsError(false);
        setSaved(false);
        setMessage('');
        setShowCancel(false);

        if (call) {
          const { email, familyName, givenName, googleId, imageUrl } = res.profileObj;
          const userData: IUserData = {
            firstName: givenName,
            lastName: familyName,
            email,
            password: '',
            imageUrl,
            googleId,
          };

          console.log(userData);

          const result: IServiceResponse = await services.postGoogleLogin(userData);
          const token = result.data;

          console.log(result);
          localStorage.setItem('token', token);
          window.location.replace('/');
        }
      } catch (error: any) {
        console.error('Error during sign-in', error);
        const errMsg = error.response?.data || 'An unexpected error occurred';
        setMessage(errMsg);
        setShowCancel(false);
        setSaved(false);
        setIsError(true);
        setOpen(true);
      }
    } else {
      console.warn('GoogleLoginResponseOffline received, ignoring.');
    }
  };

  // On failure callback
  const onFailure = (err: unknown) => {
    console.error('Google sign-in failed', err);
    const errMsg = 'Something went wrong!';
    setMessage(errMsg);
    setShowCancel(false);
    setSaved(false);
    setIsError(true);
    setOpen(true);
  };

  return (
    <div>
      <Box
        sx={{
          width: 'fit-content',
          margin: 'auto',
        }}
        onClick={() => setCall(true)}
      >
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          isSignedIn={true}
        />
      </Box>

      {/* <RequestFeedback
        successMessage={message}
        errorMessage={message}
        open={open}
        setOpen={setOpen}
        isError={isError}
        saved={saved}
        showCancel={showCancel}
        handleError={() => setOpen(!open)}
        errorBtnLabel="Close"
        handleSuccess={() => setOpen(!open)}
        successBtnLabel="Close"
      /> */}
    </div>
  );
};

export default Google;
