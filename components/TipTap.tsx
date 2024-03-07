import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxLink1, RxCheck, RxImage} from 'react-icons/rx';
import { BubbleButton } from './BubbleButton';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import {useState, useEffect} from 'react';
import { storage } from '../src/services/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

interface Props{
    attContent: (data: string) => void;
    content?: string;
    viewMode?: boolean;
}

const Tiptap = ({attContent, content, viewMode}:Props) => {
    const [inputLink, setInputLink] = useState(false);
    const [linkContent, setLinkContent] = useState('');
    const [inputImage, setInputImage] = useState(false);
    const [imageContent, setImageContent] = useState({} as Blob);
    const [altContent, setAltContent] = useState('');
    const [titleContent, setTitleContent] = useState('');
    const [uploadingImage, setUploadingImage] = useState(false);

    const editor = useEditor({
        extensions: [
        StarterKit,
        Heading,
        Link,
        Image
        ],
        editable: !viewMode,
        content: content !== '' ? content : 'Digite aqui o conteúdo do post...',
        editorProps:{
            attributes:{
                class: 'outline-none lg:w-[890px] w-full'
            }
        },
        onUpdate:(props) => {
            const data = JSON.stringify(props.editor.getHTML());
            attContent(data);
        }
    });


    function setLink(url:string){
        if(editor){
            editor.commands.toggleLink({href: url, target: '_blank'})
            setInputLink(false);
            setLinkContent('');
        }
    }

    function setImage(url:string, alt: string, title: string){
        if(editor){
            editor.commands.setImage({ src: url, alt: alt, title: title });
            setAltContent('');
            setTitleContent('');
            setInputImage(false);
            setUploadingImage(false);
        }
    }

    async function uploadImageFirebase(){
        setUploadingImage(true);
        const storageRef = ref(storage, `/blog/${new Date()}`);
        uploadBytesResumable(storageRef, imageContent)
        .then(async (res) => {
            const url = await getDownloadURL(storageRef);
            setImage(url, altContent, titleContent)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <EditorContent 
                editor={editor} 
                className='prose'
                placeholder='Digite o conteúdo do post aqui'
            />
            {editor && (
                <FloatingMenu
                    editor={editor}
                    className="flex"
                    shouldShow={({state}) => {
                        const {$from} = state.selection;
                        const currentLineText = $from.nodeBefore?.textContent

                        return currentLineText === '/'
                    }}
                    
                >
                    <div className="flex flex-col bg-gray-100 border border-gray-300 shadow-xl shadow-black/20 rounded-md overflow-hidden divide-x divide-gray-500 min-w-[300px]">
                        <button 
                            onClick={() => {}}
                            className='flex items-center px-2 hover:bg-gray-200 gap-1'
                        >
                            <img src='http://www.notion.so/images/blocks/text/en-US.png' className='w-10'/>
                            <div className='flex flex-col text-start justify-center'>
                                <span className='font-bold'>Text</span>
                                <span>Just start writing with plain text</span>
                            </div>
                        </button>
                        
                        <button 
                            onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                            className='flex items-center px-2 hover:bg-gray-200 gap-1'
                        >
                            <img src='http://www.notion.so/images/blocks/subheader.9aab4769.png' className='w-10'/>
                            <div className='flex flex-col text-start justify-center'>
                                <span className='font-bold'>Heading 2</span>
                                <span>Título de seção médio</span>
                            </div>
                        </button>
                        <button 
                            onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                            className='flex items-center px-2 hover:bg-gray-200 gap-1'
                        >
                            <img src='http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png' className='w-10'/>
                            <div className='flex flex-col text-start justify-center'>
                                <span className='font-bold'>Heading 3</span>
                                <span>Título de seção pequeno</span>
                            </div>
                        </button>
                        <button 
                            onClick={() => setInputImage(true)}
                            className='flex items-center px-2 hover:bg-gray-200 gap-1'
                        >
                            <div className='w-10 flex justify-center items-center'>
                                <RxImage className='w-5 h-5'/>
                            </div>
                            <div className='flex flex-col text-start justify-center'>
                                <span className='font-bold'>Imagem</span>
                                <span>Adicione uma imagem</span>
                            </div>
                        </button>
                    </div>

                    {inputImage && (
                        <div className='bg-gray-100 border border-gray-300 shadow-xl shadow-black/20 rounded-md flex flex-col gap-2 p-2 h-[200px] w-[250px]'>
                            <div className='flex flex-col items-center w-[250px] gap-1'>
                                <p className='font-bold'>Imagem:</p>
                                <input
                                    className="p-2 rounded-md w-full"
                                    type='file'
                                    accept="image/*"
                                    onChange={async(e) => {
                                        if(e.target.files){
                                            const file = e.target.files[0];
                                            setImageContent(file);
                                        }
                                    }}
                                />
                            </div>
                            <div className='flex items-center w-[250px] gap-1'>
                                <p className='font-bold'>Alt:</p>
                                <input
                                    className='bg-transparent border rounded-md px-1'
                                    placeholder='insira o texto ALT da imagem'
                                    value={altContent}
                                    onChange={(e) => setAltContent(e.target.value)}
                                />
                            </div>
                            <div className='flex items-center w-[250px] gap-1'>
                                <p className='font-bold'>Title:</p>
                                <input
                                    className='bg-transparent border rounded-md px-1'
                                    placeholder='insira o titulo da imagem'
                                    value={titleContent}
                                    onChange={(e) => setTitleContent(e.target.value)}
                                />
                            </div>
                            {imageContent && altContent !== '' && titleContent !== '' && (
                                <button
                                    className='flex items-center justify-center gap-2 font-bold text-white rounded-lg px-3 py-1 bg-blue-500'
                                    onClick={() => {
                                        if(!uploadingImage){
                                            uploadImageFirebase()
                                        }
                                    }}
                                >   
                                    {uploadingImage ? 'Fazendo upload...' : (
                                        <>
                                        Adicionar foto
                                        <RxCheck className='w-4 h-4'/>
                                        </>    
                                    )}
                                </button>
                            )}
                        </div>
                    )}
                </FloatingMenu>
            )}
            {editor && (
                <BubbleMenu editor={editor} className="bg-gray-100 border border-gray-300 shadow-xl shadow-black/20 rounded-md overflow-hidden flex divide-x divide-gray-500">
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        data-active={editor.isActive('bold')}
                    >
                        <RxFontBold className='w-4 h-4'/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        data-active={editor.isActive('italic')}
                    >
                        <RxFontItalic className='w-4 h-4'/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        data-active={editor.isActive('strike')}
                    >
                        <RxStrikethrough className='w-4 h-4'/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        data-active={editor.isActive('code')}
                    >
                        <RxCode className='w-4 h-4'/>
                    </BubbleButton>
                    <BubbleButton
                        onClick={() => {
                            if(editor.isActive('link')){
                                editor.commands.unsetLink();
                            }else{
                                setInputLink(true);
                            }
                        }}
                        data-active={editor.isActive('link')}
                    >
                        <RxLink1 className='w-4 h-4'/>
                    </BubbleButton>

                    {inputLink && (
                        <div className='bg-gray-100 border border-gray-300 shadow-xl shadow-black/20 rounded-md overflow-hidden flex items-center gap-2 absolute mt-9 p-2'>
                            <p className='font-bold'>Link:</p>
                            <input
                                className='bg-transparent'
                                placeholder='insira a URL do link'
                                value={linkContent}
                                onChange={(e) => setLinkContent(e.target.value)}
                            />
                            <button
                                onClick={() => setLink(linkContent)}
                            >
                                <RxCheck className='w-4 h-4'/>
                            </button>
                        </div>
                    )}
                </BubbleMenu>
            )}
        </>
    )
}

export default Tiptap