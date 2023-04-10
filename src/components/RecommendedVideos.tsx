import { ChannelProps } from '@/interfaces/ChanelInterface'
import { VideosProps } from '@/interfaces/VideosInterfaces'
import { formatNumber } from '@/utils/formatViews'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const RecommendedVideos = ({videoId}: any) => {
    const [video, setVideo] = useState<VideosProps>()
    const [channel, seChannel] =  useState<ChannelProps>()
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

            console.log(json.items[0].snippet.thumbnails)

            const dur = moment.duration(json.items[0].contentDetails.duration)
            
            const d = moment(dur.asMilliseconds()).format('h:mm:ss')

            if(d.slice(0, 1) === '9'){
                setDuration(moment(dur.asMilliseconds()).format('mm:ss'))
            }else{
                setDuration(d)
            }

            setLoading(false)
        }

        doFetch()
    }, [])

    if(loading) return

  return (
    <Link href={`/watch/${videoId}`}
    className={' text-white 2xs:p-[10px] cursor-pointer w-full'} >
        <div className='flex items-start w-full gap-5'>
        {/* { video?.snippet.thumbnails && <div className='relative 2md:w-[270px] 3md:w-[190px] md:w-[245px] 2xl:w-[205px]'>
                <Image src={video.snippet.thumbnails.high.url ? video.snippet.thumbnails.high.url : video.snippet.thumbnails.medium.url } 
                width={205} 
                height={50} 
                alt='image youtube' className='2xs:rounded-xl 
                relative w-full 2md:w-[270px] 3md:w-[190px] md:w-[245px] 2xl:w-[205px]' />
                <p className='text-xs right-2 bottom-2 px-1 py-[1px] absolute bg-black rounded'> {duration} </p>
            </div> } */}

            <div className={'flex gap-[10px] items-start mt-2'}> 

                <div className={'flex flex-col'}>
                    <div className=''>
                    { video?.snippet.title && <p className='overflow-ellipsis overflow-hidden font-medium'>{video?.snippet.title.slice(0, 48) + (video.snippet.title.length > 48 ? "..." : "")}</p> }
                    </div>
                    <div className={'text-white/60 text-xs'}>
                        <p>{video?.snippet.channelTitle}</p>

                        <div className={'flex items-center gap-2 text-xs'}>
                            <p>{formatNumber(video?.statistics.viewCount)}{' '}views</p>
                            <p>•</p>
                            <p>{moment(video?.snippet.publishedAt).startOf('days').fromNow()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
  )
}

export default RecommendedVideos