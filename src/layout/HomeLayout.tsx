import React, { HtmlHTMLAttributes } from 'react'
import styles from './Homelayout.module.css'
import Head from 'next/head'
import Header from '@/components/Header'
import Wrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'

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
      <main className={'bg-blackBase fixed h-full w-full overflow-y-scroll '}>
        <Header/>
          {children}

        <Footer/>
      </main>
    </>
  )
}

export default Homelayout