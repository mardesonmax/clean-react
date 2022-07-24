import React from 'react';
import styles from './styles.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
  isNegative?: boolean;
}

const Spinner: React.FC<Props> = ({ isNegative, ...props }: Props) => {
  const negativeClass = isNegative ? styles.negative : '';
  return (
    <div
      {...props}
      className={[styles.spinner, negativeClass, props.className].join(' ')}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
