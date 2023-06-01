import React from 'react';

interface IBLogLayout {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: IBLogLayout) {
  return (
    <div>
      <h1>Blog Layout</h1>
      {children}
    </div>
  );
}
