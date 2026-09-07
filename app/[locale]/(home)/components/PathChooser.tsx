import Link from "next/link";
import { TType } from "@/types/t";
import { FiArrowRight } from "react-icons/fi";
import { Server, Code2, Check } from "lucide-react";

interface Props {
  t: TType;
}

export function PathChooser({ t }: Props) {
  const paths = [
    {
      href: "/run-a-node",
      icon: Server,
      title: t("pathNodeTitle"),
      desc: t("pathNodeDesc"),
      bullets: [t("pathNodeBullet1"), t("pathNodeBullet2"), t("pathNodeBullet3")],
      cta: t("pathNodeCta"),
    },
    {
      href: "/build",
      icon: Code2,
      title: t("pathBuildTitle"),
      desc: t("pathBuildDesc"),
      bullets: [
        t("pathBuildBullet1"),
        t("pathBuildBullet2"),
        t("pathBuildBullet3"),
      ],
      cta: t("pathBuildCta"),
    },
  ];

  return (
    <section className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl">{t("pathsTitle")}</h2>
        <p className="mt-3 text-lg text-ink-soft">{t("pathsLead")}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {paths.map((path) => {
          const Icon = path.icon;
          return (
            <Link
              key={path.href}
              href={path.href}
              className="group flex flex-col rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-brand"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand-deep">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-2xl">{path.title}</h3>
              <p className="mt-3 text-ink-soft">{path.desc}</p>

              <ul className="mt-5 flex flex-col gap-2">
                {path.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
                {path.cta}
                <FiArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
