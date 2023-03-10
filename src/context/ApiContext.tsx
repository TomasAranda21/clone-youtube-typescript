import {createContext, useEffect, useState} from 'react'

const ApiContext = createContext()

export const ApiProvider = ({children}: any)=> {
    const [data, setData] = useState<any>([])


    useEffect(() => {
        const doFetch = async () => {
          const options = {
            part: 'snippet,contentDetails',
            key: process.env.NEXT_PUBLIC_APIKEY,
            playListId: `PLeGhvhmT-FQT4kZ7HQQdvryL_imDvlljm`,
            maxResult: 20
          }
          
          let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=${options.part}&maxResults=${options.maxResult}&playlistId=${options.playListId}&key=${options.key}`
    
          const res = await fetch(url)
          const json = await res.json()
          console.log(json)
          setData(json.items)
        }
        doFetch()
      }, [])

      return(
          
        <ApiContext.Provider
        value={{
            data,
        }}
        >

            {children}

        </ApiContext.Provider>
    )
}


export default ApiContext
