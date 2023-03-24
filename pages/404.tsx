import type { NextPage } from "next";
import { useRouter } from "next/router";
import {useEffect} from 'react'

const page404: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
    },[])
    return(
        <div></div>
    )
}

export default page404;