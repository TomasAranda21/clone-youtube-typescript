import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Divider } from '@mantine/core';
import { navExplore, navigation, navigationTwo, navSettings } from '../../routes'
import { Li, LiSubs } from './LiAtributte'
import icons from '../../public/icons/Icons'
import { subscriptions } from '../utils/apiMovies'
import { useEffect, useState } from 'react';
import { useWidth } from '@/hook/useWitdh';

interface DrawerMenuProps {
  close: () => void
  opened: boolean
}

export function DrawerMenu({opened, close}: DrawerMenuProps) {
  const [drawerModalWidth, setDrawerModalWidth] = useState('15%')
  const width = useWidth()

  useEffect(() => {
    if(width > 1500){
      setDrawerModalWidth('15%')
    }else if(width > 1300){
      setDrawerModalWidth('19%')
    }else if(width > 1100){
      setDrawerModalWidth('22%')
    }else if(width > 800){
      setDrawerModalWidth('25%')
    }else if(width > 700){
      setDrawerModalWidth('30%')
    }
    
  }, [width])

  return (
    <>
      <Drawer opened={opened}  size={drawerModalWidth} onClose={close} title="" withCloseButton={false}>
      <div className={' bg-blackBase fixed w-[100%] h-full  overflow-y-scroll overflow-hidden px-0 pr-1 hidden md:block'}>
                <div className={'relative flex items-center gap-4 text-white text-xl pl-6 mt-4'}>
                <button type='button' onClick={close}>
                    <p className='hidden sm:block'>{icons.navIcon}</p>
                </button>
                    <img src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658415358/fondoPremium_ufik6m.png" width="113"/>
                </div>
                <ul className={'flex flex-col p-0'}>
                <div className={'px-2 mt-6'}>
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
      </Drawer>
    </>
  );
}