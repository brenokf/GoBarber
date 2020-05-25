import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
import SingnUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SingnUp />
    <GlobalStyle />
  </>
);
export default App;
