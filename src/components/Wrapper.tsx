import React from 'react'
import { subscriptions } from '../utils/apiMovies'
import { navExplore, navigation, navigationTwo, navSettings } from '../../routes'
import { Li, LiSubs } from './LiAtributte'
import { Divider } from '@mantine/core'

interface ContainerProps {
    children: React.ReactElement 
}

const Wrapper = ({children} : ContainerProps ) => {

  return (

<div className={'relative w-full h-[2000px]'}>
        <div className={' bg-blackBase fixed w-[13%] h-full left-0 top-[55px] overflow-y-scroll overflow-hidden px-0 pr-1 hidden 1xl:block'}>
                <ul className={'flex flex-col p-0'}>
                <div className={'px-2 mt-4'}>
                        {navigation.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>
                        ))}

                        <Divider my="sm" color={'gray'} />

                        {navigationTwo.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}

                        <Divider my="sm" color={'gray'} />


                        <Li text="SUBSCRIPTIONS" type={'text'}/>
                        {subscriptions.map((subs : any) => (
                            <LiSubs text={subs.name} img={subs.img}/>
                        ))}
                
                        <Divider my="sm"  color={'gray'} />

                        <Li text="EXPLORE" type={'text'}/>

                        {navExplore.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}
                        
                        <Divider my="sm" color={'gray'} />


                        
                        {navSettings.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}

                        <Divider my="sm" color={'gray'} />

                        <div className='pb-10  px-4'>
                        <div className='flex gap-2'>
                              {['About', 'Press', 'Copyright'].map(e => (
                                <p className='text-gray-100/60 text-xs font-normal' key={e}>
                                   {e}
                                </p>
                              ))}
                        </div>
                        <div className='flex gap-2'>
                              {['Contact us',  'Creators'].map(e => (
                                <p className='text-gray-100/60 text-xs font-normal' key={e}>
                                   {e}
                                </p>
                              ))}
                        </div>
                        <div className='flex gap-2'>
                              {['Advertise, Developers'].map(e => (
                                <p className='text-gray-100/60 text-xs font-normal' key={e}>
                                   {e}
                                </p>
                              ))}
                        </div>
                        <div className='flex gap-2 mt-5'>
                              {['Terms', 'PrivacyPolicy', '&', 'Safety'].map(e => (
                                <p className='text-gray-100/60 text-xs font-normal' key={e}>
                                   {e}
                                </p>
                              ))}
                        </div>
                        <div className='flex gap-2'>
                              {['How YouTube works'].map(e => (
                                <p className='text-gray-100/60 text-xs font-normal' key={e}>
                                   {e}
                                </p>
                              ))}
                        </div>
                        <div className='flex gap-2'>
                              {['Test new features'].map(e => (
                                <p className='text-gray-100/60 text-xs font-normal' key={e}>
                                   {e}
                                </p>
                              ))}
                        </div>

                        <p className='text-gray-100/60 text-xs font-normal mt-6 '>
                        © 2023 Google LLC
                        </p>
                </div>


                <Divider my="sm" color={'gray'} />

                </div>
                </ul>
        </div>

        <div className={`py-6 w-full lg:w-[94%] xl:w-[84%] sm:px-3 lg:left-[6%] 1xl:left-[12%]
         overflow-x-hidden bg-blackBase grid 2xs:grid-cols-2 md:grid-cols-3
         lg:grid-cols-3 xl:grid-cols-4 absolute top-12 2xl:left-[14%] `}>
                {children}
        </div>
</div>


  )
}

export default Wrapper