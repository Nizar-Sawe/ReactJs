import React from 'react'

 export default function getuserspage1(){
    useEffect(() => {
        fetch("https://randomuser.me/api?results=8")
          .then(resp => resp.json())
          .then(resp => { setData(resp.results)})
                    }, [])
}
