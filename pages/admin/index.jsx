import Image from "next/image";
import styles from "../../styles/Admin.module.css";
import { axiosInstance } from "../../config";
import { useState } from "react";

const Admin = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);

  const handleDelete = async (id) => {
    try{
      const res = await axiosInstance.delete("/products/" + id)
      setPizzaList(pizzaList.filter((pizza)=>pizza._id !== id))
    }catch(err){
      console.log(err)
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {orderList.map(order=>(
          <tbody key={order._id}>
            <tr className={styles.trTitle}>
              {/* <td> {"98675340876543354".slice(0, 5)}...</td> */}
              <td> {order._id.slice(0, 5)}...</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{order.paymentMethod === 0 ? <span>cash</span> : <span>paid</span>}</td>
              <td>preparing</td>
              <td>
                <button>Next Stage</button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const productRes = await axiosInstance.get("/products");
  const orderRes = await axiosInstance.get("/orders");
  return {
    props: {
      products: productRes.data,
      orders: orderRes.data
    },
  };
};

export default Admin;
