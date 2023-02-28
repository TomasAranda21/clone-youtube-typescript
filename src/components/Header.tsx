import React, { useState } from 'react'
// import CardSearch from '../CardSearch/CardSearch'
import icons from '../../public/icons/Icons'
// import NavAccount from '../NavAccount/NavAccount'

interface props {
    searchCarousel? : boolean
}

const Header = ({searchCarousel} :props  )  => {

  const [navAccount, setNavAccount] = useState(false)

  return (

    <div className={'w-full flex flex-col sticky top-0 z-50'}>
        <div className={'w-full py-3 px-5 flex justify-between mx-auto items-center relative'}>

        <div className={'relative flex items-center gap-4 text-white text-xl'}>
            {icons.navIcon}
            <img src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658415358/fondoPremium_ufik6m.png" width="120"/>

        </div>

          <div className={'flex items-center gap-4 w-1/3'}>
            <div className={'flex items-center rounded shadow-lg bg-white/10'}>
              <input type="text" className={'text-center px-20 text-white'} placeholder="Search"/>
              <p className={'cursor-pointer'}>{icons.searchIcon}</p>
            </div>

              <p className={'text-center px-20 text-white'}>{icons.micIcon}</p>
          </div>
      </div>

      {/* { props.searchCarousel && 

        <div >
          <CardSearch/>
        </div>

      } */}
    </div>

  )
}

export default Header