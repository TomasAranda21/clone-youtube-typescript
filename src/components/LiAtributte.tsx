import Image from 'next/image'
import React from 'react'
interface LiProps {
    text: string | null,
    icon?: React.ReactElement,
    type?: string,
}

interface LiSubsProps {
    text: string | null,
    img: string 
}

export const Li = ({text, icon, type}: LiProps) => {
  return (
    <div className={''}>
        <li className={type === 'text' ? 'text-white/40' : 'flex items-center text-white gap-2 font-medium px-3 py-2 my-3 cursor-pointer text-sm hover:bg-[#f1f1f1]/10 rounded-lg mx-3'}>
            <p className='text-lg'>{icon}</p>
            <p className='text-white ml-4 capitalize'>{text?.toLowerCase()}</p>
        </li>
    </div>

  )
}


export const LiSubs = ({text, img} : LiSubsProps) => {
  return (
    <div className={''}>
        <li className={'flex items-center gap-4 font-medium px-3 py-3 mx-3'}>
            <div className={'w-[24px] h-[24px]'}>
                <Image src={img} width={24} height={24} alt="image" className='absolute rounded-full object-cover' />
            </div>
            <p className='text-center text-gray-50'>{text}</p>
        </li>
    </div>
  )
}
