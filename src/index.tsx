import * as React from 'react';
import styles from './index.module.css';

type ComponentProps = {
  title: string;
};

export default function ExampleComponent(props: ComponentProps) {
  const { type, ...others } = props;

  return (
    <div className={styles.test} {...others}>
      Hello ExampleComponent
    </div>
  );
}
