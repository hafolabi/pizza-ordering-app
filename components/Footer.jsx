import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' alt='' objectFit='cover' layout='fill' />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}> 
            OH YES, WE DID THEINSIGHTS PIZZA, WELL BAKED SLICED PIZZA
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
              1456 Sleek Hotels Ikd. #304
              <br />Lagos, Nigeria
              <br /> (0806)-389-3054
          </p>

           <p className={styles.text}>
              1456 Sleek Hotels Ikd. #304
              <br />Lagos, Nigeria
              <br /> (0806)-389-3054
          </p>

           <p className={styles.text}>
              1456 Sleek Hotels Ikd. #304
              <br />Lagos, Nigeria
              <br /> (0806)-389-3054
          </p>

           <p className={styles.text}>
              1456 Sleek Hotels Ikd. #304
              <br />Lagos, Nigeria
              <br /> (0806)-389-3054
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
              MONDAY TILL FRIDAY
              <br /> 9:00 - 22:00
          </p>

          <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer