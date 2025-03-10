import { AppLink } from "@/components/AppLink/AppLink";
import { TType } from "@/types/t"

interface Props {
    t: TType;
}
export function Applications({ t }: Props) {
    return (
        <section className="my-10 lg:my-20 w-full flex flex-wrap rounded-md p-5 lg:p-10 bg-[#E9E9E9] gap-10 md:gap-0">
            <div className="w-full md:max-w-[48%] md:pr-14">
                <h3 className="text-2xl md:text-4xl md:text-start text-center text-text-title">{t('impact')}</h3>
                <p className="text-text-subtitle md:text-lg mt-3">{t('descriptionImpact')}</p>
            </div>

            <div className="w-full md:max-w-[48%]">
                <h3 className="text-2xl md:text-4xl text-center md:text-start text-text-title">{t('applications')}</h3>
                <div className="mt-3 flex flex-wrap gap-3 w-full">
                    <AppLink
                        app="regenerationCredit"
                        t={t}
                    />
                    <AppLink
                        app="explorerMainnet"
                        t={t}
                    />
                    <AppLink
                        app="sequoiaExplorer"
                        t={t}
                    />
                </div>
            </div>
        </section>
    )
}