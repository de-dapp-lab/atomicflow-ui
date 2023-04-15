import { NextPage } from 'next'
import { useEffect } from 'react';


const Profile: NextPage = () => {
    useEffect(() => {
        document.location = '/dashboad'
    }, [])
    return(<></>)
}

export default Profile