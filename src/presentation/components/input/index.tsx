import React, { useContext } from 'react';
import FormContext from '~/presentation/contexts/form/form-context';
import styles from './styles.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const { errorState } = useContext(FormContext);

  const error = errorState[name];
  return (
    <div className={styles.inputWrap} data-status={error ? 'invalid' : 'valid'}>
      <input
        {...rest}
        title={error}
        placeholder=" "
        readOnly
        onFocus={e => {
          e.target.readOnly = false;
        }}
      />
    </div>
  );
};

export default Input;
