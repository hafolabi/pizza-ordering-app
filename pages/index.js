import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzaList";
import Featured from "../components/Slider";
import { axiosInstance } from "../config";
import styles from "../styles/Home.module.css";

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Ordering</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList}/>
    </div>
  );
}

export const getServerSideProps = async () =>{
    const res = await axiosInstance.get("/products")
    return{
        props: {
            pizzaList: res.data,
        }
    }
}
