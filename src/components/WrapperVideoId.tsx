import React from 'react'


interface ContainerProps {
    children: string | JSX.Element | JSX.Element[]
}

const WrapperVideoId = ({children} : ContainerProps ) => {
  return (
    <div className='flex items-start'>
        {children}
    </div>
  )
}

export default WrapperVideoId