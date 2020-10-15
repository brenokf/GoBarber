import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import {useField} from '@unform/core';
import { Container, TextButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <TextButton>{children}</TextButton>
  </Container>
);
export default Button;
