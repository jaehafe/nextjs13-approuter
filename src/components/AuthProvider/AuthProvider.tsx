'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface IAuthProvider {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: IAuthProvider) {
  return <SessionProvider>{children}</SessionProvider>;
}
