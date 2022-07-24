import React from 'react';
import { Logo } from '~/presentation/components/logo';
import { Spinner } from '~/presentation/components/spinner';
import styles from './styles.scss';

export function Login() {
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <Logo />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>

      <form data-testid="form" className={styles.form}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>

        <Spinner />
      </form>

      <footer className={styles.footer} />
    </div>
  );
}
