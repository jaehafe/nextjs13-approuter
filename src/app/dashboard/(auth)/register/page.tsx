'use client';

import React, { useReducer, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type State = {
  name: string;
  email: string;
  password: string;
  error: Error | null;
};

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_ERROR'; payload: Error | null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default function Register() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
    error: null,
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          password: state.password,
        }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload:
          err instanceof Error
            ? err
            : new Error(err?.toString() || 'Unknown error'),
      });

      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
          value={state.name}
          onChange={(e) =>
            dispatch({ type: 'SET_NAME', payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          value={state.password}
          onChange={(e) =>
            dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
          }
        />
        <button className={styles.button}>Register</button>
        {state.error && 'Something went wrong!'}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
}
