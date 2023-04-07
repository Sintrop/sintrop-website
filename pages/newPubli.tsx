import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import DynamicTag from "../components/DynamicTag";
import { api } from "../src/services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const [corpo, setCorpo] = useState<ContentProps[]>([]);
    const [imgBannerUrl, setImgBannerUrl] = useState('');
    const [imgBannerAlt, setImgBannerAlt] = useState('');
    const [language, setLanguage] = useState('pt-BR');
    const [tokenJWT, setTokenJWT] = useState('');
    const [password, setPassword] = useState('');
    
    
    function addTag(type: string){
        if(tagType === ''){
            toast.error('Selecione uma tag')
            return;
        }
        if(!tagValue.trim() && type !== 'img'){
            toast.error('Digite um valor para a tag')
            return;
        }

        if(type === 'img'){
            if(!imgUrl.trim()){
                toast.error('Insira a URL da imagem')
                return
            };
            if(!imgAlt.trim()){
                toast.error('Insira o atributo ALT para a imagem')
                return
            };
        }

        let data = {
            tag: tagType,
            content: tagValue,
            imgAlt: imgAlt,
            imgSrc: imgUrl,
            href: href
        } as ContentProps;

        corpo.push(data)

        setTagType('');
        setTagValue('');
        setImgAlt('');
        setImgUrl('');
        setHref('');
    }

    function deleteTag(content: string){
        const newArray = corpo.filter(tag => tag.content !== content)
        setCorpo(newArray)
    }

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

        if(corpo.length === 0){
            toast.error('Crie um corpo para a publicação')
            return;
        }

        handleSendPost()
    }

    function handleSendPost(){
        try{
            setLoading(true);
            api.post('/post', {
                title: title,
                description,
                bannerUrl: imgBannerUrl,
                bannerAlt: imgBannerAlt,
                bodyPost: JSON.stringify(corpo),
                language,
                keywords,
                url: title.replaceAll(' ', '-').toLowerCase()
            })
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
                wallet: 'ADM_SINTROP.SINTROP.COM',
                password
            })
            setTokenJWT(response.data)
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
        }catch(err){
            console.log(err);
        }
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
        <div className="flex flex-col gap-5 items-center">
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

            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-green-700 font-bold">URL da imagem de capa:</p>
                <input
                    className="p-2 rounded-md bg-gray-200"
                    type='text'
                    value={imgBannerUrl}
                    onChange={e => setImgBannerUrl(e.target.value)}
                    placeholder='Digite a URL aqui'
                />
            </div>

            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-green-700 font-bold">Alt da imgem de capa:</p>
                <input
                    className="p-2 rounded-md bg-gray-200"
                    type='text'
                    value={imgBannerAlt}
                    onChange={e => setImgBannerAlt(e.target.value)}
                    placeholder='Digite a Alt aqui'
                />
            </div>

            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-green-700 font-bold">Titulo da publicação:</p>
                <input
                    className="p-2 rounded-md bg-gray-200"
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Digite o título aqui'
                />
            </div>

            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-green-700 font-bold">Descrição breve da publicação:</p>
                <input
                    className="p-2 rounded-md bg-gray-200"
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder='Digite a descrição aqui'
                />
            </div>

            <div className="flex flex-col w-[500px] gap-1">
                <p className="text-green-700 font-bold">Palavras chaves. OBS: Utilizar vírgula após cada palavra</p>
                <input
                    className="p-2 rounded-md bg-gray-200"
                    type='text'
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                    placeholder='Digite as palavras chaves aqui'
                />
            </div>

            <div className="flex flex-col w-[700px] gap-1">
                <p className="font-bold text-green-700 text-center">Corpo da publicação</p>
                <p className="text-center mb-5">Insira todo o conteúdo da publicação, selecionando as tags desejadas, e preenchendo seu conteúdo</p>

                {corpo.map(item => {
                    return(
                        <DynamicTag
                            key={item.content}
                            data={item}
                            onDelete={(content) => deleteTag(content)}
                        />
                    )
                })}

            </div>

            <div>
                <div className="flex flex-col w-[500px] gap-1">
                    <p className="text-green-700 font-bold">Tag HTML:</p>
                    <select
                        value={tagType}
                        onChange={e => setTagType(e.target.value)}
                        className='bg-gray-200 rounded-md w-[200px] p-2'
                    >
                        <option value=''>Selecione uma tag</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="p">p</option>
                        <option value="a">a</option>
                        <option value="img">img</option>
                    </select>
                </div>
                {tagType !== 'img' && (
                    <div className="flex flex-col w-[500px] gap-1">
                        <p className="text-green-700 font-bold">Conteúdo:</p>
                        <textarea
                            value={tagValue}
                            onChange={e => setTagValue(e.target.value)}
                            placeholder='Digite o conteúdo da tag'
                            className="p-2 rounded-md bg-gray-200 resize-none"
                        />
                    </div>
                )}

                {tagType === 'img' && (
                    <>
                    <div className="flex flex-col w-[500px] gap-1">
                        <p className="text-green-700 font-bold">URL da imagem:</p>
                        <input
                            value={imgUrl}
                            onChange={e => setImgUrl(e.target.value)}
                            placeholder='Digite a URL da imagem'
                            className="p-2 rounded-md bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-col w-[500px] gap-1">
                        <p className="text-green-700 font-bold">Alt da imagem:</p>
                        <input
                            value={imgAlt}
                            onChange={e => setImgAlt(e.target.value)}
                            placeholder='Digite o texto de acessibilidade da imagem'
                            className="p-2 rounded-md bg-gray-200"
                        />
                    </div>
                    </>
                )}

                {tagType === 'a' && (
                    <>
                    <div className="flex flex-col w-[500px] gap-1">
                        <p className="text-green-700 font-bold">Href:</p>
                        <input
                            value={href}
                            onChange={e => setHref(e.target.value)}
                            placeholder='Insira o link'
                            className="p-2 rounded-md bg-gray-200"
                        />
                    </div>
                    </>
                )}
                <button 
                    onClick={() => addTag(tagType)}
                    className='flex items-center justify-center w-full p-2 rounded-md bg-green-700 text-white mt-3 cursor-pointer mb-3'
                >
                    Adicionar Tag
                </button>
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
                className='items-center justify-center bg-red-400 px-5 py-2 rounded-lg mb-10'
            >
                Criar post
            </button>

            <ToastContainer 
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                closeOnClick
                pauseOnHover
            />
        </div>
    )
}

export default NewPubli;