import React, { useMemo, useState } from 'react';
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from '~/presentation/components';
import FormContext from '~/presentation/contexts/form/form-context';
import styles from './styles.scss';

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
  });

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: '',
  });

  const valueProvider = useMemo(
    () => ({ state, errorState }),
    [state, errorState],
  );

  return (
    <div className={styles.login}>
      <LoginHeader />

      <FormContext.Provider value={valueProvider}>
        <form data-testid="form" className={styles.form}>
          <h2>Login</h2>
          <Input
            data-testid="email-status"
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
          />

          <Input
            data-testid="password-status"
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button data-testid="submit" disabled type="submit">
            Entrar
          </button>

          <FormStatus />
        </form>
      </FormContext.Provider>

      <Footer />
    </div>
  );
};

export default Login;
