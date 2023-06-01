import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

interface IButton {
  text: string;
  url: string;
}

export default function Button({ text, url }: IButton) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}
