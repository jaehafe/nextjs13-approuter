import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import { IItem, IItems, items } from './data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getData = (category: keyof IItems) => {
  const data: IItem[] = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

interface ICategory {
  params: {
    category: keyof IItems;
  };
}

export default function Category({ params }: ICategory) {
  console.log(params);
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item: IItem) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
