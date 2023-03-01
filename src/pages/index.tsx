import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homelayout from '@/layout/HomeLayout'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Homelayout>
      <Header/>
      <Wrapper>
        <h1 className='text-2xl text-red-600'>Holaaasdasd</h1>
      </Wrapper>
    </Homelayout>
  )
}
