import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Displayer = () => {

    const [data,setData] = useState({})

    useEffect(()=>{
        Axios.get('http://localhost:3001/details')
        .then((res)=>{
            setData({
                ...data,res
            })
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div>
      fffffffff
    </div>
  )
}

export default Displayer
