import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DynamicTag from "../components/DynamicTag";

interface ContentProps{
    tag: string;
    content: string;
    imgSrc?: string;
    imgAlt?: string;
    imgStyle?: string;
}

const NewPubli: NextPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tagType, setTagType] = useState('');
    const [tagValue, setTagValue] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imgAlt, setImgAlt] = useState('');
    const [corpo, setCorpo] = useState<ContentProps[]>([]);
    
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

    return(
        <div className="flex flex-col gap-5 items-center">
            Nova publicação

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
                        <option value="H1">H1</option>
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
                        <input
                            value={tagValue}
                            onChange={e => setTagValue(e.target.value)}
                            placeholder='Digite o conteúdo da tag'
                            className="p-2 rounded-md bg-gray-200"
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
                    className='flex items-center justify-center w-full p-2 rounded-md bg-green-700 text-white mt-3 cursor-pointer'
                >
                    Adicionar Tag
                </button>
            </div>

        </div>
    )
}

export default NewPubli;