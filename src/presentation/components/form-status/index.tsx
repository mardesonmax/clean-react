import React, { useContext } from 'react';
import FormContext from '~/presentation/contexts/form/form-context';
import Spinner from '../spinner';
import styles from './styles.scss';

const FormStatus: React.FC = () => {
  const { isLoading, mainError } = useContext(FormContext);
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {mainError && (
        <span data-testid="main-error" className={styles.error}>
          {mainError}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
