import React, { useState } from 'react'
import { axiosInstance } from '../../config'
import styles from '../../styles/Login.module.css'
import {useRouter} from "next/router"

const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleClick = async ()=>{
        try{
            await axiosInstance.post("/login", {username, password})
            router.push("/admin")
        }catch(err){
            setError(true)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin Dashboard</h1>
            <input 
            placeholder="username"
            type='text'
            className={styles.input}
            onChange={(e)=> setUsername(e.target.value)}
            />

            <input 
            type='password'
            placeholder="password"
            className={styles.input}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleClick} className={styles.button}>
                Sign In
            </button>
            {error && <span className={styles.error}>Wrong Credentials</span>}
        </div>
    </div>
  )
}   

export default Login