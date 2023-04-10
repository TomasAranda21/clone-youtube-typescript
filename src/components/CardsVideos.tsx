import { ChannelProps } from '@/interfaces/ChanelInterface'
import { VideosProps } from '@/interfaces/VideosInterfaces'
import { formatNumber } from '@/utils/formatViews'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface CardsVideosProps {
    videoId: string
}

const CardsVideos = ({videoId} : CardsVideosProps) => {
    const [video, setVideo] = useState<VideosProps>()
    const [channel, setChannel] =  useState<ChannelProps>()
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

            if(json.items[0] == undefined) return
            
            setVideo(json.items[0])


            const dur = moment.duration(json.items[0].contentDetails.duration)
            
            const d = moment(dur.asMilliseconds()).format('h:mm:ss')

            if(d.slice(0, 1) === '9'){
                setDuration(moment(dur.asMilliseconds()).format('mm:ss'))
            }else{
                setDuration(d)
            }

            const optionChannel = {
                part: 'snippet,contentDetails,statistics,topicDetails',
                id: json.items[0].snippet.channelId,
            }

            let urlChannel = `https://youtube.googleapis.com/youtube/v3/channels?part=${optionChannel.part}&id=${optionChannel.id}&key=${key}`
            const response = await fetch(urlChannel)
            const jsonChannel = await response.json()

            setChannel(jsonChannel.items[0].snippet.thumbnails.high)
            setLoading(false)
        }

        doFetch()
    }, [])

    if(loading) return <div>Loading...</div>

  return (
    <> 
        {/* <Link href={`/watch/${videoId}`} */}
        <div
        className={'flex flex-col gap-2 mt-5 text-white 2xs:p-[10px] w-full cursor-pointer'} >
               {video?.snippet.thumbnails && 
                    <div className='relative '>
                    <Image src={video.snippet.thumbnails.maxres?.url ? video.snippet.thumbnails.maxres?.url : video.snippet.thumbnails.medium.url } 
                    width={300} 
                    height={240} 
                    alt='image youtube' className='2xs:rounded-xl relative w-full 2md:w-[270px] 3md:w-[290px]  md:w-[245px] 2xl:w-[645px]  ' />
                    <p className='text-xs right-2 bottom-2 px-1 py-[1px] absolute bg-black rounded'> {duration} </p>
                 </div>
               } 

                <div className={'flex gap-[10px] items-start px-3'}> 

                    { channel?.url && <Image src={channel.url} width={36} height={55} className="rounded-full mt-2" alt='icon'/> }

                    <div className={'flex flex-col'}>
                        <div className=''>
                            { video?.snippet.title && <p className='overflow-ellipsis overflow-hidden font-medium'>{video?.snippet.title.slice(0, 48) + (video.snippet.title.length > 48 ? "..." : "")}</p> }
                        </div>
                        <div className={'text-white/60 text-sm'}>
                            <p>{video?.snippet.channelTitle}</p>

                            <div className={'flex items-center gap-2'}>
                                <p>{formatNumber(video?.statistics.viewCount)}{' '}views</p>
                                <p>•</p>
                                <p>{moment(video?.snippet.publishedAt).startOf('days').fromNow()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </Link> */}
            </div>
    </>
  )
}

export default CardsVideos


