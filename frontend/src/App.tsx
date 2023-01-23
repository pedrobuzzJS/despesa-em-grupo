import React from 'react';
import { AuthProvider } from './app/context/authContext';
import AppRoutes from './app/routes/index.routes';

const App: React.FC = () => {
  return (
    <AuthProvider children={
        <AppRoutes />
    } />
  );
};

export default App;