import React from 'react'
import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/pizza.png' alt='' width='500' height='500' objectFit="cover"  />
        <h1 className={styles.title}>Chicken Pizza</h1>
        <span className={styles.price}>#1500</span>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
   </div>
  )
}

export default PizzaCard