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
  ButtonWrapper,
} from './styles';
import SignInSocialButton from '../../components/SignInSocialButton';

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

      <Footer>
        <ButtonWrapper>
          <SignInSocialButton title="Entrar com Google" svg={GoogleIcon} />
          <SignInSocialButton title="Entrar com Apple" svg={AppleIcon} />
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};
