import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { singup } from "../firebase";
import { async } from "@firebase/util";
import {useRef} from 'react'

export default function Home() {
  const emailRef = useRef()
  const passwordRef = useRef()

 async function wow () {

  try {  
    await singup(emailRef.current.value, passwordRef.current.value)
  } catch (error) {
    alert('anda sudah login dengan akun yang sama')
  }  
  }

  
  return (
<>
    <div id="main">
      <div className="input">
      <input type='email' placeholder="email" ref={emailRef} />
      <input type='password' placeholder="password" ref={passwordRef} />
      </div>
    <button onClick={wow}>Kirim</button>
    </div>
</>
  );
}
