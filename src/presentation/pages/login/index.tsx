import React, { useState } from 'react';
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from '~/presentation/components';
import FormContext from '~/presentation/contexts/form/form-context';
import styles from './styles.scss';

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: '',
  });
  return (
    <div className={styles.login}>
      <LoginHeader />

      <FormContext.Provider value={state}>
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
