import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homelayout from '@/layout/HomeLayout'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import CardsMovies from '@/components/CardsMovies'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const doFetch = async () => {
      // const url = 'https://www.googleapis.com/youtube/v3/playlistItems'
      
      const options = {
        part: 'snippet,contentDetails',
        key: process.env.NEXT_PUBLIC_APIKEY,
        playListId: `PLeGhvhmT-FQT4kZ7HQQdvryL_imDvlljm`,
        maxResult: 20
      }
      
      let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=${options.part}&maxResults=${options.maxResult}&playlistId=${options.playListId}&key=${options.key}`

      const res = await fetch(url)
      const json = await res.json()
      setData(json.items)
   
    }

    doFetch()
  }, [])

  return (
    <Homelayout>
      <Header/>
      <Wrapper>
        {data.map((data : any) => {
          return (
            <div key={data.id}>
            <CardsMovies videoId={data.contentDetails.videoId}/>
          </div>
          )
        })}
      </Wrapper>
    </Homelayout>
  )
}
