import { Inter } from 'next/font/google'
import Homelayout from '@/layout/HomeLayout'
import Wrapper from '@/components/Wrapper'
import CardsVideos from '@/components/CardsVideos'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<any>([])

  useEffect(() => {
      const doFetch = async () => {
        const options = {
          part: 'snippet,contentDetails',
          key: process.env.NEXT_PUBLIC_APIKEY,
          playListId: `PLeGhvhmT-FQT4kZ7HQQdvryL_imDvlljm`,
          maxResult: 20
        }
        
        let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=${options.part}&maxResults=${options.maxResult}&playlistId=${options.playListId}&key=${options.key}`
  
        const res = await fetch(url)
        const json = await res.json()
        // console.log(json)
        setData(json.items)
      }
      doFetch()
    }, [])

  return (
    <Homelayout>
      <Wrapper>
        {data?.map((data : any) => {
          return (
            <div key={`${data.id}12`}>
            <CardsVideos videoId={data.contentDetails.videoId}/>
          </div>
          )
        })}
      </Wrapper>
    </Homelayout>
  )
}
