import { AppLink } from "@/components/AppLink/AppLink";
import { LinkBtn } from "@/components/LinkBtn/LinkBtn";
import { TType } from "@/types/t"

interface Props {
    t: TType;
}
export function Blockchain({ t }: Props) {
    return (
        <section className="my-10 lg:my-20">
            <h3 className="text-text-title text-center text-2xl md:text-4xl md:text-start">{t('blockchain')}</h3>
            <div className="flex flex-wrap justify-between gap-5">
                <div className="flex flex-col gap-3 w-full md:max-w-[48%]">
                    <h4 className="text-text-title text-xl md:text-2xl">{t('explorer')}</h4>

                    <div className="md:mt-3 flex flex-col gap-5">
                        <AppLink
                            t={t}
                            app="explorerMainnet"
                            directLink
                        />

                        <AppLink
                            t={t}
                            app="sequoiaExplorer"
                            directLink
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:max-w-[48%]">
                    <h4 className="text-text-title text-xl md:text-2xl">{t('Links')}</h4>

                    <div className="md:mt-3 flex flex-wrap gap-5">
                        <LinkBtn href="https://status.sintrop.com" label="Status Sintrop" />
                        <LinkBtn href="https://github.com/sintrop/go-sintrop" label="Github" />
                    </div>
                </div>
            </div>
        </section>
    )
}