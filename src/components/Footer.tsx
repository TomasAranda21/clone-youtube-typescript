import icons from 'public/icons/Icons'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center flex-col items-center pb-6 gap-5">
        <div className="flex justify-center gap-10 items-center text-white ">
            <a href="https://github.com/TomasAranda21" target="_blank">{icons.githubIcon}</a>
            <a href="https://www.linkedin.com/in/tomas--aranda/" target="_blank">{icons.linkedinIcon}</a>
            <a href="https://tomasaranda.dev" target="_blank">{icons.webIcon}</a>
        </div>
        <p className='text-center text-white'>Construido por Tomás Aranda</p>
    </footer>
  )
}

export default Footer