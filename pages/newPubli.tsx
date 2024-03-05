import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import DynamicTag from "../components/DynamicTag";
import { api } from "../src/services/api";
import { ToastContainer, toast } from "react-toastify";
import Tiptap from "../components/TipTap";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Base64 } from "js-base64";
import { storage } from "../src/services/firebase";
import {ref, getDownloadURL} from 'firebase/storage';

interface ContentProps{
    tag: string;
    content: string;
    imgSrc?: string;
    imgAlt?: string;
    imgStyle?: string;
    href?: string;
}

const NewPubli: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [tagType, setTagType] = useState('');
    const [tagValue, setTagValue] = useState('');
    const [href, setHref] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imgAlt, setImgAlt] = useState('');
    const [contentPost, setContentPost] = useState('');
    const [imgBannerUrl, setImgBannerUrl] = useState('');
    const [imgBannerAlt, setImgBannerAlt] = useState('');
    const [language, setLanguage] = useState('pt-BR');
    const [tokenJWT, setTokenJWT] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        verifyContentPostSaved();
        uploadFirebase();
    },[]);

    function validateSend(){
        if(!title.trim()){
            toast.error('Digite um titulo para a publicação')
            return;
        }

        if(!description.trim()){
            toast.error('Digite uma descrição para a publicação')
            return;
        }

        if(!keywords.trim()){
            toast.error('Digite palavras-chave para a publicação')
            return;
        }

        if(!imgBannerUrl.trim()){
            toast.error('Insira a URL do banner da publicação')
            return;
        }

        if(!imgBannerAlt.trim()){
            toast.error('Insira o ALT text do banner da publicação')
            return;
        }

        if(!contentPost.trim()){
            toast.error('Crie um corpo para a publicação')
            return;
        }

        handleSendPost()
    }

    async function saveContent(){
        await localStorage.setItem('contentEditor', contentPost);
        toast.success('Dados salvos!')
    }

    async function verifyContentPostSaved(){
        const res = await localStorage.getItem('contentEditor');
        if(res){
            setContentPost(res);
        }
    }

    function handleSendPost(){
        try{
            setLoading(true);
            api.post('/post', {
                title: title,
                description,
                bannerUrl: imgBannerUrl,
                bannerAlt: imgBannerAlt,
                bodyPost: contentPost,
                language,
                keywords,
                url: title.replaceAll(' ', '-').toLowerCase()
            });
            localStorage.removeItem('contentEditor');
            toast.success('Post feito com sucesso!')
        }catch(err){
            toast.success('Algo deu errado, tente novamente!')
        }finally{
            setLoading(false);
        }
    }

    async function handleLogin() {
        try{
            const response = await api.post('/login', {
                wallet: '0x2c53392A0601FDEa8290c2c5775ed620402B7752',
                password
            })
            setTokenJWT(response.data)
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
        }catch(err){
            console.log(err);
        }
    }

    async function uploadImageIpfs(data: Uint8Array){
        const token = 'Basic ' + Base64.encode('2F2FHYWhdz3ynk8PeorZrtf0FSG:9cf6a1ddc8510764d564c0f7b9a08cf2')
        const response = await axios.post('https://ipfs.infura.io:5001/api/v0/add?pin=false',{
            data: {
                file: data
            },
        }, {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': token,
            }
        });

        return response.data.Hash;
    }

    async function uploadFirebase() {
        // const storageRef = ref(storage, 'images/QmNLnTGQN8oLJ8iDUXY3eFKkGjHspfcwKCQduGsTXMtBZH.png')
        // const url = await getDownloadURL(storageRef);
        // console.log(url)
    }

    if(tokenJWT === ''){
        return(
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-[500px] gap-1">
                    <p className="text-green-700 font-bold">Digite a senha de administrador:</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Digite a senha aqui'
                    />
                    <button 
                        onClick={handleLogin}
                        className='flex items-center justify-center w-full p-2 rounded-md bg-green-700 text-white mt-3 cursor-pointer mb-3'
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col w-[1000px]">
                Nova publicação
                {imgBannerUrl !== '' && (
                    <img
                        src={imgBannerUrl}
                        alt={imgBannerAlt}
                        className='object-cover w-full h-[400px]'
                    />
                )}

                <h1 className='font-bold text-3xl'>{title}</h1>
                <p className='w-[700px] text-center'>{description}</p>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-green-700 font-bold">Banner do post:</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='file'
                        accept="image/*"
                        onChange={async(e) => {
                            if(e.target.files){
                                const file = e?.target?.files[0];
                                //const 
                            }
                        }}
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-green-700 font-bold">URL do banner:</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='text'
                        value={imgBannerUrl}
                        placeholder='Digite a URL aqui'
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-green-700 font-bold">Alt do banner:</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='text'
                        value={imgBannerAlt}
                        onChange={e => setImgBannerAlt(e.target.value)}
                        placeholder='Digite a Alt aqui'
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-green-700 font-bold">Titulo da publicação:</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder='Digite o título aqui'
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-green-700 font-bold">Descrição breve da publicação:</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='text'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Digite a descrição aqui'
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-green-700 font-bold">Palavras chaves. OBS: Utilizar vírgula após cada palavra</p>
                    <input
                        className="p-2 rounded-md bg-gray-200"
                        type='text'
                        value={keywords}
                        onChange={e => setKeywords(e.target.value)}
                        placeholder='Digite as palavras chaves aqui'
                    />
                </div>

                <div className="flex flex-col mt-5 rounded-lg bg-gray-100 px-2">
                    <Tiptap
                        attContent={(data) => setContentPost(data)}
                        content={contentPost !== '' ? JSON.parse(contentPost) : 'Digite o conteúdo aqui...'}
                    />
                    <button 
                        onClick={saveContent}
                        className="bg-blue-500 rounded-lg py-1 font-bold text-white w-32 my-2"
                    >Salvar dados</button>
                </div>  

                <div className="flex flex-col w-[500px] gap-1">
                    <p className="text-green-700 font-bold">Linguagem:</p>
                    <select
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                        className='bg-gray-200 rounded-md w-[200px] p-2'
                    >
                        <option value=''>Selecione uma linguagem</option>
                        <option value="pt-BR">pt-BR</option>
                        <option value="en-US">en-US</option>
                    </select>
                </div>

                <button
                    onClick={validateSend}
                    className='items-center justify-center bg-red-400 px-5 py-2 rounded-lg mb-10 mt-5'
                >
                    Criar post
                </button>
            </div>

            <ToastContainer
                position="top-center"
            />
        </div>
    )

}

export default NewPubli;