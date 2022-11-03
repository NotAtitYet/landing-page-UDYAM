import React from 'react'

const GoogleLoginPage = () => {
    const onGoogleLoginSuccess = useCallback(
      (response) => {
        const idToken = response.tokenId;
        const data = {
          email: response.profileObj.email,
          first_name: response.profileObj.givenName,
          last_name: response.profileObj.familyName,
        };

        validateTokenAndObtainSession({ data, idToken })
          .then(console.log("GG"))
          .catch(notifyError);
      },
    );
    const validateTokenAndObtainSession = ({ data, idToken }) => {
      const headers = {
        Authorization: idToken,
        "Content-Type": "application/json",
      };

      return post("users/init/", data, { headers });
    };
  return (
    <GoogleLogin
      clientId="http://291915461156-qvqhctcrsusf10vi4rd30f0higp2c9to.apps.googleusercontent.com/" // your Google app client ID
      buttonText="Sign in with Google"
      onSuccess={onGoogleLoginSuccess} // perform your user logic here
      onFailure={onGoogleLoginFailure} // handle errors here
    />
  );
}

export default GoogleLoginPage