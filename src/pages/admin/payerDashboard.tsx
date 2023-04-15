import { NextPage } from 'next'
import { useEffect } from 'react';


const PayerDashboard : NextPage = () => {
    useEffect(() => {
        document.location = '/payer/dashboard'
    }, [])
    return(<></>)
}

export default PayerDashboard
