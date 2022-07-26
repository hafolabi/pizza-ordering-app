import Image from "next/image";
import React from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extra</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>

              <td>
                <span className={styles.name}>Pepper Spiced</span>
              </td>

              <td>
                <span className={styles.extras}>Double incredient, Spicy sauce</span>
              </td>

              <td>
                <span className={styles.price}>#1500</span>
              </td>

              <td>
                <span className={styles.quantity}>2</span>
              </td>

              <td>
                <span className={styles.total}>#3000</span>
              </td>
            </tr>

            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>

              <td>
                <span className={styles.name}>Pepper Spiced</span>
              </td>

              <td>
                <span className={styles.extras}>Double incredient, Spicy sauce</span>
              </td>

              <td>
                <span className={styles.price}>#1500</span>
              </td>

              <td>
                <span className={styles.quantity}>2</span>
              </td>

              <td>
                <span className={styles.total}>#3000</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>SubTotal:</b> #3000
        </div>

        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount:</b> #00.00
        </div>

        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Total:</b> #3000
        </div>

        <button className={styles.button}>CHECKOUT NOW!</button>

        </div>
      </div>
    </div>
  );
};

export default Cart;
