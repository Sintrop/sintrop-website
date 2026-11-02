import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getContentMDFromGitHub } from "@/src/services/github";
import { TutorialProps } from "../../tutorialsList";
import { TType } from "@/types/t";
import Link from "next/link";

interface Props {
  item: TutorialProps;
  t: TType;
  index: number;
}

export async function TutorialItem({ item, t, index }: Props) {
  const htmlContent = await getContentMDFromGitHub({
    pathFile: item?.pathFile,
    repo: item?.repo,
    username: item?.username,
  });

  return (
    <AccordionItem
      value={index.toString()}
      className="overflow-hidden rounded-2xl border border-line bg-surface px-5"
    >
      <AccordionTrigger className="text-left text-base">
        {t(item?.title)}
      </AccordionTrigger>
      <AccordionContent className="pb-5">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="markdown-content"
        />

        <Link
          href={`/tutorials/${item?.id}`}
          className="mt-5 inline-block text-sm font-semibold text-brand-deep hover:underline"
        >
          {t("seeMoreDetails")}
        </Link>
      </AccordionContent>
    </AccordionItem>
  );
}
