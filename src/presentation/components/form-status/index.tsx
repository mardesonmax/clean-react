import React, { useContext } from 'react';
import FormContext from '~/presentation/contexts/form/form-context';
import Spinner from '../spinner';
import styles from './styles.scss';

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(FormContext);
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {state.isLoading && <Spinner className={styles.spinner} />}
      {errorState.main && (
        <span data-testid="main-error" className={styles.error}>
          {errorState.main}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
