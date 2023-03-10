import moment from 'moment'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { api } from '../utils/apiMovies'


const CardsMovies = ({videoId}:any) => {
    const [video, setVideo] = useState<any>({})
    const [channel, seChannel] =  useState<any>({})
    const [loading, setLoading] = useState(true)
    const [duration, setDuration] = useState('')
    useEffect(() => {
        const doFetch = async () => {
            setLoading(true)
            const key = process.env.NEXT_PUBLIC_APIKEY
            const optionVideo = {
                part: 'snippet,contentDetails,statistics,topicDetails,player,liveStreamingDetails',
                id: videoId,
            }

            
            let url = `https://youtube.googleapis.com/youtube/v3/videos?part=${optionVideo.part}&id=${optionVideo.id}&key=${key}`
            const res = await fetch(url)
            const json = await res.json()
            
            setVideo(json.items[0])

            const time = json.items[0].contentDetails.duration.split('PT')[1].replace(/\D/g,':')
            setDuration(time.substring(0, time.length-1))

            const optionChannel = {
                part: 'snippet,contentDetails,statistics,topicDetails',
                id: json.items[0].snippet.channelId,
            }

            let urlChannel = `https://youtube.googleapis.com/youtube/v3/channels?part=${optionChannel.part}&id=${optionChannel.id}&key=${key}`
            const response = await fetch(urlChannel)
            const jsonChannel = await response.json()

            seChannel(jsonChannel.items[0])
            setLoading(false)
        }

        doFetch()
    }, [])

    if(loading) return

/* 
--- snippet
channelTitle
description
title

thumbnails.medium
thumbnails.standard.url
description
publishedAt
*/

  return (
    <> 
        <div className={'flex flex-col gap-2 text-white 2xs:p-[10px] w-full cursor-pointer'} >
                <div className='relative '>
                    <Image src={video.snippet.thumbnails.maxres?.url ? video.snippet.thumbnails.maxres?.url : video.snippet.thumbnails.medium.url } 
                    width={300} 
                    height={240} 
                    // objectFit={'cover'}
                    alt='image youtube' className='2xs:rounded-xl relative w-full 2md:w-[270px] 3md:w-[290px]  md:w-[245px] 2xl:w-[345px]  ' />
                    <p className='text-xs right-2 bottom-2 px-1 py-[1px] absolute bg-black rounded'> {duration} </p>
                </div>

                <div className={'flex gap-[10px] items-start px-3'}> 

                    <Image src={channel.snippet.thumbnails.high?.url} width={36} height={55} className="rounded-full mt-2" alt='icon'/>

                    <div className={'flex flex-col'}>
                        <div className=''>
                            <p className='overflow-ellipsis overflow-hidden font-medium'>{video.snippet.title.slice(0, 48) + (video.snippet.title.length > 48 ? "..." : "")}</p> 
                        </div>
                        <div className={'text-white/60 text-sm'}>
                            <p>{video.snippet.channelTitle}</p>

                            <div className={'flex items-center gap-2'}>
                                <p>{video.statistics.viewCount}</p>
                                <p>•</p>
                                <p>{moment(video.snippet.publishedAt).startOf('days').fromNow()}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default CardsMovies


