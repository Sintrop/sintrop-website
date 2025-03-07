import { AppLink } from "@/components/AppLink/AppLink";
import { TType } from "@/types/t"

interface Props {
    t: TType;
}
export function Blockchain({ t }: Props) {
    return (
        <section className="my-10 lg:my-20 flex flex-wrap justify-between">
            <div className="flex flex-col gap-3 w-full md:max-w-[48%]">
                <h3 className="text-text-title text-4xl">{t('blockchain')}</h3>
                <h4 className="text-text-title text-2xl">{t('explorer')}</h4>

                <div className="mt-3 flex flex-col gap-5">
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
        </section>
    )
}