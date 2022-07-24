import React from 'react';
import Spinner from '../spinner';
import styles from './styles.scss';

type Props = {
  state: any;
};

const FormStatus: React.FC<Props> = ({ state }: Props) => {
  const { isLoading, mainError } = state;
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
