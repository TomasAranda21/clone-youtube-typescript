import CardsVideos from '@/components/CardsVideos'
// import RecommendedVideos from '@/components/RecommendedVideos'
import WrapperVideoId from '@/components/WrapperVideoId'
import { ChannelProps } from '@/interfaces/ChanelInterface'
import { VideosProps } from '@/interfaces/VideosInterfaces'
import Homelayout from '@/layout/HomeLayout'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoId = () => {
  const route = useRouter()
  const {id} = route.query
  const [video, setVideo] = useState<VideosProps>()
  const [channel, setChannel] =  useState<ChannelProps>()
  const [loading, setLoading] = useState(true)
  const [duration, setDuration] = useState('')
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
  
  useEffect(() => {
      const doFetch = async () => {
          setLoading(true)
          const key = process.env.NEXT_PUBLIC_APIKEY
          const optionVideo = {
              part: 'snippet,contentDetails,statistics,topicDetails,player,liveStreamingDetails',
              id: id,
          }

          let url = `https://youtube.googleapis.com/youtube/v3/videos?part=${optionVideo.part}&id=${optionVideo.id}&key=${key}`
          const res = await fetch(url)
          const json = await res.json()
          setVideo(json.items[0])

          const dur = moment.duration(json.items[0]?.contentDetails.duration)
          
          const d = moment(dur.asMilliseconds()).format('h:mm:ss')

          if(d.slice(0, 1) === '9'){
              setDuration(moment(dur.asMilliseconds()).format('mm:ss'))
          }else{
              setDuration(d)
          }

          const optionChannel = {
              part: 'snippet,contentDetails,statistics,topicDetails',
              id: json.items[0]?.snippet?.channelId,
          }

          let urlChannel = `https://youtube.googleapis.com/youtube/v3/channels?part=${optionChannel.part}&id=${optionChannel.id}&key=${key}`
          const response = await fetch(urlChannel)
          const jsonChannel = await response.json()

          setChannel(jsonChannel.items[0])
          setLoading(false)
      }

    id && doFetch()
  }, [id])

  if(loading) return

  return (
    <Homelayout>
      <WrapperVideoId>
        <div className='mx-5 mt-5 w-[72%]'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
          autoPlay
          width={1050}
          height={650}
          controls/>
        </div>

        <div  className='flex flex-col w-[28%]'>
          {data.map((data : any) => {
            return (
              <div key={data.id}>
              <CardsVideos videoId={data.contentDetails.videoId}/>
            </div>
            )
          })}
        </div>
      </WrapperVideoId>
    </Homelayout>
  )
}

export default VideoId