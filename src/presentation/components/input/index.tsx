/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import styles from './styles.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  state: any;
  setState: any;
}

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>();
  const error = state[`${props.name}Error`];
  return (
    <div className={styles.inputWrap} data-status={error ? 'invalid' : 'valid'}>
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        readOnly
        onFocus={e => {
          e.target.readOnly = false;
        }}
        onChange={e => {
          setState({ ...state, [e.target.name]: e.target.value });
        }}
      />
      <label
        onClick={() => {
          inputRef.current.focus();
        }}
        title={error}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
