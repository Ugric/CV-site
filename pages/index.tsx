import type { NextPage } from 'next'
import wave from './images/wave.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { getCookie } from 'cookies-next';

const Home: NextPage = (ctx) => {
  const [myval, setval] = useState(0)
  console.log(ctx)
  return (
    <div className={ styles.top_container }>
      <h1 className={ styles.introduction }>Hey <Image src={ wave.src } width='50px' height={ '50px' }></Image>, I'm Will.</h1>
      <p className={ styles.top_bottom } onClick={ () => {
        setval(myval + 1)
      } }>{ myval }</p>
    </div>
  )
}

export default Home
