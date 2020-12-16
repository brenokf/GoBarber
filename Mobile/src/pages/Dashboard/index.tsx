import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
