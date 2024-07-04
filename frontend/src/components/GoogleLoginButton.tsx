// src/components/GoogleLoginButton.tsx
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({
  onSuccess,
}: {
  onSuccess: (response: any) => void;
}) => {
  console.log("Google Client ID:", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

  const handleSuccess = (credentialResponse: any) => {
    console.log("Login/Signup Success:", credentialResponse);
    onSuccess(credentialResponse);
  };

  const handleError = () => {
    console.log("Login/Signup Failed");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
