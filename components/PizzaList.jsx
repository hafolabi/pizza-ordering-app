import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        You are welcome to Harfoo Pizza food resturant which was created 
        to meet up with the neigbourhood
        request towards having a space where they can sit relax and have a delicious
        bites of a hot yummy pizza with a web app created to reach out to our
        customers outside our outlet reach. 
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map(pizza => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default PizzaList