import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import PizzaList from "../components/PizzaList";
import Featured from "../components/Slider";
import { axiosInstance } from "../config";
import styles from "../styles/Home.module.css";

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Ordering</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin &&  <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose} />}
    </div>
  );
} 

export const getServerSideProps = async (ctx) =>{
  const cookie = ctx.req?.cookies || ""; 
  // if there is a request its gonna take cookie, 
  // and if no cookie, its gonna be just empty string
  let admin = false

  if(cookie.token === process.env.TOKEN ){
    admin = true
  }

    const res = await axiosInstance.get("/products")
    return{
        props: {
            pizzaList: res.data,
            admin
        }
    }
    
}
