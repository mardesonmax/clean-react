import React from 'react';
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from '~/presentation/components';
import styles from './styles.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <LoginHeader />

      <form data-testid="form" className={styles.form}>
        <h2>Login</h2>
        <Input
          state=""
          setState={null}
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
        />

        <Input
          state=""
          setState={null}
          type="password"
          name="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>

        <FormStatus state="" />
      </form>

      <Footer />
    </div>
  );
};

export default Login;
