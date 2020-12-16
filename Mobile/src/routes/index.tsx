import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};
export default Routes;
