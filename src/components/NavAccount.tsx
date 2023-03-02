import Image from 'next/image'
import React from 'react'
import icons from '../../public/icons/Icons'
import styles from './li.module.css'

interface LiProps {
    text: string,
    icon?: React.ReactElement,
}

const LiAccount = ({text, icon}: LiProps) => {
  return (
    <li className={'px-4 py-3 flex items-cente gap-4'}>
        {icon}
        <p className='font-light text-white/80 text-sm'>{text}</p>
    </li>
  )
}


const NavAccount = () => {
  return (

    <div className={'border border-white/10 rounded-lg border-t-0 w-full text-white bg-[#212121fb]'}>

        <ul className={'leading-3'}>
            <li className={'p-5 text-sm flex items-center justify-start gap-[10px]'}>
                    <Image src="https://yt3.ggpht.com/yti/AHXOFjVBYKMbEkKRTewzNN2rccSPi_X1ixVA-m50Ix72zQ=s108-c-k-c0x00ffffff-no-rj" 
                    alt="image profile" className='rounded-full -mt-6'
                    width="40" height="40" />

                    <div className={''}>
                        <h3 className='text-white font-medium'>Tomás Aranda</h3>
                        <h4 className='text-white font-medium mb-2'>@tomasaranda37</h4>
                        <a href="#" className='mt-20 text-[#3ea6ff]'>Manage yout Google Account</a>
                    </div>
                
            </li>
            <div className='border-t border-white/20'>
                <LiAccount text='Your channel' icon={icons.userIcon}/>
                <LiAccount text='Youtube Studio' icon={icons.userIcon}/>
                <LiAccount text='Switch account' icon={icons.accountIcon}/>
                <LiAccount text='Sign out' icon={icons.signOutIcon}/>
            </div>

            <div className='border-t border-white/20'>
                <LiAccount text='Purchases and memberships' icon={icons.membershipsIcon}/>
                <LiAccount text='Your data in Youtube' icon={icons.yourDataIcon}/>
            </div>

            <div className='border-t border-white/20'>
                <LiAccount text='Appearance: Dark' icon={icons.darkIcon}/>
                <LiAccount text='Language: English' icon={icons.languageIcon}/>
                <LiAccount text='Restricted Mode: off' icon={icons.restrictedIcon}/>
                <LiAccount text='Location: Argentina' icon={icons.locationIcon}/>
                <LiAccount text='Keyboard shortcuts' icon={icons.keyboardIcon}/>
            </div>

            <div className='border-t border-white/20'>
                <LiAccount text='Settings' icon={icons.settingsIcon}/>
            </div>


            <div className='border-t border-white/20'>
                <LiAccount text='Help' icon={icons.helpIcon}/>
                <LiAccount text='Send feedback' icon={icons.exclamationIcon}/>
            </div>

        </ul>
    </div>

  )
}

export default NavAccount