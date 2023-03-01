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
        <div className={'w-full py-3 px-6 flex justify-between mx-auto items-center relative'}>

        <div className={'relative flex items-center gap-4 text-white text-xl'}>
            {icons.navIcon}
            <img src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658415358/fondoPremium_ufik6m.png" width="120"/>

        </div>

          <div className={'flex items-center gap-3 w-[80%] justify-center mx-auto '}>
            <div className={'flex items-center rounded-2xl w-[45%] shadow-lg bg-white/10 border border-white/30'}>
              <input type="text" className={'rounded-2xl w-full px-4 py-1.5 border-r border-white/30 rounded-r-none text-white bg-[#121212] outline-0'} placeholder="Search"/>
              <p className={'cursor-pointer w-14 mx-auto flex justify-center text-white text-[18px] text-center'}>{icons.searchIcon}</p>
            </div>

              <p className={'text-center text-white bg-gray-400/10 p-3 rounded-full'}>{icons.micIcon}</p>
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