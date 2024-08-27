import { useTranslation } from "react-i18next"


interface Props{
    tag: string
}

export default function Tags({tag}: Props){
    const {t} = useTranslation();
    return(
        <div className="px-3 h-5 rounded-full bg-[#def7e3] flex items-center">
            <p className="text-[10px] text-[#8c8c8c]">
                {tag === 'development' && t('desenvolvimento')}
                {tag === 'comming-soon' && t('emBreve')}
                {tag === 'live' && 'Live'}
            </p>
        </div>
    )
}