import fs from 'fs';
import { api } from '../src/services/api';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async ({res, params, locale}: GetServerSidePropsContext) => {
    const response = await api.get(`/posts/${locale}`)
    console.log(response.data.posts)
    return{
        props:{}
    }
}

export default function SiteMap() {
    
}