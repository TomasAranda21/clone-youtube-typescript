import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { api } from '../utils/apiMovies'


const CardsMovies = ({videoId}:any) => {
    const [video, setVideo] = useState<any>({})
    const [channel, seChannel] =  useState<any>({})
    const [loading, setLoading] = useState(true)
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
            // console.log(json.items[0].snippet.channelId )
            const optionChannel = {
                part: 'snippet,contentDetails,statistics,topicDetails',
                id: json.items[0].snippet.channelId,
            }

            let urlChannel = `https://youtube.googleapis.com/youtube/v3/channels?part=${optionChannel.part}&id=${optionChannel.id}&key=${key}`
            const response = await fetch(urlChannel)
            const jsonChannel = await response.json()

            console.log('===>', jsonChannel.items[0])
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
        <div className={'flex flex-col gap-2 text-white w-[360px] p-[10px] cursor-pointer'} >
                <div className='relative h-[240px] w-[400px] '>
                    <Image src={video.snippet.thumbnails.maxres?.url ? video.snippet.thumbnails.maxres?.url : video.snippet.thumbnails.medium.url } 
                    width={360} 
                    height={140} 
                    objectFit={'cover'}
                    alt='image youtube' className='rounded-xl  ' />
                    <p className='text-sm right-1 bottom-1 px-1 py-[1px] absolute bg-black rounded'> 22 </p>
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
                                {/* <p>{item.date} ago</p> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default CardsMovies


