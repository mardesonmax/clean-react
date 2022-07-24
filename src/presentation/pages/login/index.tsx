import React from 'react';
import Footer from '~/presentation/components/footer';
import Header from '~/presentation/components/login-header';
import { Spinner } from '~/presentation/components/spinner';
import styles from './styles.scss';

export function Login() {
  return (
    <div className={styles.login}>
      <Header />

      <form data-testid="form" className={styles.form}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>

        <Spinner />
      </form>

      <Footer />
    </div>
  );
}
