import React, { useState } from 'react'
// import CardSearch from '../CardSearch/CardSearch'
import icons from '../../public/icons/Icons'
import { CarouselSearch } from './CarouselSearch'
import NavAccount from './NavAccount'
// import NavAccount from '../NavAccount/NavAccount'

interface props {
    searchCarousel? : boolean
}

const Header = ({searchCarousel} :props  )  => {

  const [navAccount, setNavAccount] = useState(false)

  return (

    <div className={'w-full flex flex-col sticky top-0 z-50 bg-blackBase'}>
    
      <div className={'w-full py-2 px-2 sm:px-6 flex justify-between mx-auto items-center relative'}>

        <div className={'relative flex items-center gap-4 text-white text-xl'}>
            <p className='hidden sm:block'>{icons.navIcon}</p>
            <img src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658415358/fondoPremium_ufik6m.png" width="113"/>
        </div>

          <div className={'sm:flex items-center gap-3 w-[80%] justify-center mx-auto hidden  '}>
            <div className={'flex items-center rounded-3xl w-[45%] shadow-lg bg-white/10 border border-white/10'}>
              <input type="text" className={'rounded-3xl w-full px-4 placeholder:text-white/50 placeholder:font-light py-1.5 border-r border-white/10 rounded-r-none text-white bg-[#121212] outline-0'} placeholder="Search"/>
              <p className={'cursor-pointer w-16 mx-auto flex justify-center text-white text-[18px] text-center'}>{icons.searchIcon}</p>
            </div>

              <p className={'text-center text-white bg-gray-400/10 p-3 rounded-full'}>{icons.micIcon}</p>
          </div>


        <div className={'flex items-center gap-7 pr-4'}>
              <p className={'text-white text-xl'}>{icons.addVideoIcon}</p>
              <p className={'text-white text-xl'}>{icons.bellIcon}</p>
              <img style={{cursor: 'pointer'}}
              src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="30" onClick={() => setNavAccount(!navAccount)} />

              {navAccount && 
                <div className={'absolute z-50 top-14 right-6'}>
                  <NavAccount/>
                </div>
              }
        </div>
      </div>

      <div className='py-6 w-full h-[70px] sm:px-5 lg:w-[94%] xl:w-[84%] px-3 
      lg:left-[6%] xl:left-[11%]
         overflow-x-hidden bg-blackBase
          absolute top-12 2xl:left-[14%]'>
        <CarouselSearch/>
      </div>

    </div>

  )
}

export default Header