"use client";

import { useState } from "react";
import { CommandBlock } from "@/components/Copy/CommandBlock";
import { SINTROP_MAINNET } from "@/lib/network";

type Tool = "hardhat" | "foundry" | "remix";

export interface DeployLabels {
  guideTitle: string;
  guideLead: string;
  guideTool: string;
  guideToolHardhat: string;
  guideToolFoundry: string;
  guideToolRemix: string;
  hardhatStep1Title: string;
  hardhatStep1Desc: string;
  hardhatStep2Title: string;
  hardhatStep2Desc: string;
  foundryStep1Title: string;
  foundryStep1Desc: string;
  foundryStep2Title: string;
  foundryStep2Desc: string;
  remixStep1Title: string;
  remixStep1Desc: string;
  remixStep2Title: string;
  remixStep2Desc: string;
  remixStep3Title: string;
  remixStep3Desc: string;
  copy: string;
  copied: string;
}

interface Props {
  labels: DeployLabels;
}

const RPC = SINTROP_MAINNET.rpcUrl;
const CHAIN_ID = SINTROP_MAINNET.chainId;

const HARDHAT_CONFIG = `// hardhat.config.ts
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sintrop: {
      url: "${RPC}",
      chainId: ${CHAIN_ID},
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
  },
};

export default config;`;

const FOUNDRY_CONFIG = `# foundry.toml
[rpc_endpoints]
sintrop = "${RPC}"`;

const FOUNDRY_DEPLOY = `forge create src/ImpactRegistry.sol:ImpactRegistry \\
  --rpc-url ${RPC} \\
  --private-key $PRIVATE_KEY`;

export function DeployGuide({ labels }: Props) {
  const [tool, setTool] = useState<Tool>("hardhat");

  const steps: { title: string; body: React.ReactNode }[] =
    tool === "hardhat"
      ? [
          {
            title: labels.hardhatStep1Title,
            body: (
              <div className="flex flex-col gap-3">
                <p className="text-ink-soft">{labels.hardhatStep1Desc}</p>
                <CommandBlock
                  caption="hardhat.config.ts"
                  command={HARDHAT_CONFIG}
                  copyLabel={labels.copy}
                  copiedLabel={labels.copied}
                />
              </div>
            ),
          },
          {
            title: labels.hardhatStep2Title,
            body: (
              <div className="flex flex-col gap-3">
                <p className="text-ink-soft">{labels.hardhatStep2Desc}</p>
                <CommandBlock
                  caption="bash"
                  command={`npx hardhat run scripts/deploy.ts --network sintrop`}
                  copyLabel={labels.copy}
                  copiedLabel={labels.copied}
                />
              </div>
            ),
          },
        ]
      : tool === "foundry"
        ? [
            {
              title: labels.foundryStep1Title,
              body: (
                <div className="flex flex-col gap-3">
                  <p className="text-ink-soft">{labels.foundryStep1Desc}</p>
                  <CommandBlock
                    caption="foundry.toml"
                    command={FOUNDRY_CONFIG}
                    copyLabel={labels.copy}
                    copiedLabel={labels.copied}
                  />
                </div>
              ),
            },
            {
              title: labels.foundryStep2Title,
              body: (
                <div className="flex flex-col gap-3">
                  <p className="text-ink-soft">{labels.foundryStep2Desc}</p>
                  <CommandBlock
                    caption="bash"
                    command={FOUNDRY_DEPLOY}
                    copyLabel={labels.copy}
                    copiedLabel={labels.copied}
                  />
                </div>
              ),
            },
          ]
        : [
            {
              title: labels.remixStep1Title,
              body: (
                <div className="flex flex-col gap-3">
                  <p className="text-ink-soft">{labels.remixStep1Desc}</p>
                  <CommandBlock
                    caption="wallet — custom network"
                    command={`Network name   ${SINTROP_MAINNET.name}\nRPC URL        ${RPC}\nChain ID       ${CHAIN_ID}\nCurrency       ${SINTROP_MAINNET.currencySymbol}\nExplorer       ${SINTROP_MAINNET.explorerUrl}`}
                    copyLabel={labels.copy}
                    copiedLabel={labels.copied}
                  />
                </div>
              ),
            },
            {
              title: labels.remixStep2Title,
              body: <p className="text-ink-soft">{labels.remixStep2Desc}</p>,
            },
            {
              title: labels.remixStep3Title,
              body: (
                <div className="flex flex-col gap-3">
                  <p className="text-ink-soft">{labels.remixStep3Desc}</p>
                  <CommandBlock
                    caption="Remix — External Http Provider"
                    command={RPC}
                    copyLabel={labels.copy}
                    copiedLabel={labels.copied}
                  />
                </div>
              ),
            },
          ];

  const tools: { value: Tool; label: string }[] = [
    { value: "hardhat", label: labels.guideToolHardhat },
    { value: "foundry", label: labels.guideToolFoundry },
    { value: "remix", label: labels.guideToolRemix },
  ];

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl">{labels.guideTitle}</h2>
      <p className="mt-2 text-ink-soft">{labels.guideLead}</p>

      <fieldset className="mt-8">
        <legend className="text-sm font-medium text-ink">
          {labels.guideTool}
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {tools.map((option) => {
            const active = option.value === tool;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setTool(option.value)}
                aria-pressed={active}
                className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-brand bg-brand-tint text-brand-deep"
                    : "border-line bg-page text-ink-soft hover:border-brand/50"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <ol className="mt-10 flex flex-col gap-8">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint font-anta text-sm text-brand-deep">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg">{step.title}</h3>
              <div className="mt-2">{step.body}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
