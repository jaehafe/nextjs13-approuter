'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';

export default function Dashboard() {
  // OLD WAY TO FETCH DATA
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const getData = async () => {
  //   const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
  //     cache: 'no-cache',
  //   });

  //   if (!res.ok) {
  //     setErr(true);
  //     throw new Error('Something went wrong');
  //   }

  //   const data = await res.json();

  //   setData(data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log(data);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  return <div>Dashboard</div>;
}
