import { View, Text } from 'react-native';
import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import AppleIcon from '../../assets/apple-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
} from './styles';

type Props = {};

export const SignIn = (props: Props) => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <Title>Controle suas finanças de forma muito simples</Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {'\n'} uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer />
    </Container>
  );
};
