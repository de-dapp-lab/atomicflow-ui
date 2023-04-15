import { NextPage } from 'next'
import { useEffect } from 'react';


const Dashboad: NextPage = () => {
    useEffect(() => {
        document.location = '/dashboad'
    }, [])
    return(<></>)
}

export default Dashboad