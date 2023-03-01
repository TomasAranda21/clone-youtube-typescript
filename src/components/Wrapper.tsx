import React from 'react'
import { subscriptions } from '../utils/apiMovies'
// import LiSubs from '../Li/LiSubs'
import { navExplore, navigation, navigationTwo, navSettings } from '../../routes'
import { Li, LiSubs } from './LiAtributte'
import { Divider } from '@mantine/core'

interface ContainerProps {
    children: React.ReactElement 
}

const Wrapper = ({children} : ContainerProps ) => {

  return (

<div className={'relative w-full h-[1500px]'}>
        <div className={' bg-blackBase fixed w-[12%] h-full left-0 top-[55px] overflow-y-scroll overflow-hidden px-0'}>
                <ul className={'flex flex-col p-0'}>
                <div className={''}>
                        {navigation.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>
                        ))}

                        <Divider my="sm" />

                        {navigationTwo.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}

                        <Divider my="sm" />

                        <Li text="SUBSCRIPTIONS" type={'text'}/>
                        {subscriptions.map((subs : any) => (
                            <LiSubs text={subs.name} img={subs.img}/>
                        ))}
                
                        <Divider my="sm" />

                        <Li text="EXPLORE" type={'text'}/>

                        {navExplore.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}
                        
                        <Divider my="sm" />

                        
                        {navSettings.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}
                        <p>
                        AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
                        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                        © 2022 Google LLC
                        </p>

                        <Divider my="sm" />

                </div>
                </ul>
        </div>

        <div className={'py-6 w-[80%] flex flex-wrap gap-4 absolute top-0 left-[17%]'}>
                {children}
        </div>
</div>


  )
}

export default Wrapper