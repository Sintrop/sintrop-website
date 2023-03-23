import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DynamicTag from "../components/DynamicTag";
import { api } from "../src/services/api";

interface ContentProps{
    tag: string;
    content: string;
    imgSrc?: string;
    imgAlt?: string;
    imgStyle?: string;
}

const NewPubli: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tagType, setTagType] = useState('');
    const [tagValue, setTagValue] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imgAlt, setImgAlt] = useState('');
    const [corpo, setCorpo] = useState<ContentProps[]>([]);
    const [imgBannerUrl, setImgBannerUrl] = useState('');
    const [imgBannerAlt, setImgBannerAlt] = useState('');
    const [language, setLanguage] = useState('pt-BR');
    
    function addTag(type: string){
        if(tagType === ''){
            return;
        }
        if(!tagValue.trim() && type !== 'img'){
            return;
        }

        if(type === 'img'){
            if(!imgUrl.trim())return;
            if(!imgAlt.trim())return;
        }

        let data = {
            tag: tagType,
            content: tagValue,
            imgAlt: imgAlt,
            imgSrc: imgUrl
        } as ContentProps;

        corpo.push(data)

        setTagType('');
        setTagValue('');
        setImgAlt('');
        setImgUrl('');
    }

    function deleteTag(content: string){
        const newArray = corpo.filter(tag => tag.content !== content)
        setCorpo(newArray)
    }

    function handleSendPost(){
        try{
            setLoading(true);
            api.post('/post', {
                title,
                description,
                bannerUrl: imgBannerUrl,
                bannerAlt: imgBannerAlt,
                bodyPost: JSON.stringify(corpo),
                language
            })
            alert('Post feito com sucesso!')
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
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
                <p className="text-green-700 font-bold">URL da imgem de capa:</p>
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

            <div className="flex flex-col w-[700px] gap-1">
                <p className="font-bold text-green-700 text-center">Corpo da publicação</p>
                <p className="text-center mb-5">Insira todo o conteúdo da publicação, selecionando as tags desejadas, e preenchendo seu conteúdo</p>

                {corpo.map(item => {
                    return(
                        <DynamicTag
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
                <button 
                    onClick={() => addTag(tagType)}
                    className='flex items-center justify-center w-full p-2 rounded-md bg-green-700 text-white mt-3 cursor-pointer mb-3'
                >
                    Adicionar Tag
                </button>
            </div>

            <button
                onClick={handleSendPost}
            >
                Criar post
            </button>
        </div>
    )
}

export default NewPubli;