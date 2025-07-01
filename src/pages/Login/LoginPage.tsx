/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import LoginFormSection from './LoginFormSection';
import { backgroundStyle } from './Login.style';

const LoginPage = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <div css={backgroundStyle(theme)}>
      <LoginFormSection />
    </div>
  );
};

export default LoginPage;
