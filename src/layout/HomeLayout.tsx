import React, { HtmlHTMLAttributes } from 'react'
import styles from './Homelayout.module.css'
import Head from 'next/head'

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[] 
}

const Homelayout = ({children} : LayoutProps) => {

  return (

    <>
      <Head>
            <title> Clone Youtube</title>
            <link rel="icon" href=''/>

      </Head>
      <main className={'bg-blackBase'}>

          {children}

        {/* <Footer/> */}

      </main>
    </>
  )
}

export default Homelayout