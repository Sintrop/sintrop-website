import type { NextPage } from "next";
import { useRouter } from "next/router";
import {useEffect} from 'react'

const Page404: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/');
    },[])
    return(
        <div>
        </div>
    )
}

export default Page404;