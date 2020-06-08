import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Image } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

const SingIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title> Faça seu logon </Title>
        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('Deu mané');
          }}
        >
          Entrar
        </Button>
        <ForgotPassword onPress={() => {}}>
          <ForgotPasswordText> Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText> criar uma conta </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default SingIn;
