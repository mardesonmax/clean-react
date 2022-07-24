import React from 'react';
import Footer from '~/presentation/components/footer';
import FormStatus from '~/presentation/components/form-status';
import Input from '~/presentation/components/input';
import Header from '~/presentation/components/login-header';
import { Spinner } from '~/presentation/components/spinner';
import styles from './styles.scss';

export function Login() {
  return (
    <div className={styles.login}>
      <Header />

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
}
