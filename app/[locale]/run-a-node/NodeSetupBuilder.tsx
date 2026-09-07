"use client";

import { useMemo, useState } from "react";
import { CommandBlock } from "@/components/Copy/CommandBlock";
import { SINTROP_MAINNET, SINTROP_TESTNET, CLIENT_RELEASES } from "@/lib/network";
import { FiArrowUpRight } from "react-icons/fi";

type NetworkChoice = "mainnet" | "testnet";
type MethodChoice = "docker" | "binary";

export interface BuilderLabels {
  builderTitle: string;
  builderLead: string;
  builderNetwork: string;
  builderNetworkMainnet: string;
  builderNetworkTestnet: string;
  builderMethod: string;
  builderMethodDocker: string;
  builderMethodBinary: string;
  builderWallet: string;
  builderWalletHint: string;
  builderWalletInvalid: string;
  stepPrereqTitle: string;
  stepPrereqDocker: string;
  stepPrereqBinary: string;
  stepGetTitle: string;
  stepGetBinary: string;
  stepGetDockerClone: string;
  stepGetReleasesCta: string;
  stepStartTitle: string;
  stepStartBinaryDesc: string;
  stepStartDockerDesc: string;
  stepStartDockerGeth: string;
  stepMineTitle: string;
  stepMineDesc: string;
  stepMineGpu: string;
  stepVerifyTitle: string;
  stepVerifyDesc: string;
  stepStopNote: string;
  copy: string;
  copied: string;
}

interface Props {
  labels: BuilderLabels;
}

const WALLET_PLACEHOLDER = "0xYourWalletAddress";

export function NodeSetupBuilder({ labels }: Props) {
  const [network, setNetwork] = useState<NetworkChoice>("mainnet");
  const [method, setMethod] = useState<MethodChoice>("docker");
  const [wallet, setWallet] = useState("");

  const cfg =
    network === "mainnet"
      ? {
          identity: SINTROP_MAINNET.name,
          datadir: "./sintrop_node",
          flag: "--sintrop",
          networkId: SINTROP_MAINNET.chainId,
          p2pPort: SINTROP_MAINNET.p2pPort,
          httpPort: SINTROP_MAINNET.httpPort,
          image: "go_sintrop",
          volume: "/go-sintrop/sintrop_node",
          hostDir: "~/sintrop_node",
        }
      : {
          identity: SINTROP_TESTNET.name,
          datadir: "./sequoia_node",
          flag: "--sequoia",
          networkId: SINTROP_TESTNET.chainId,
          p2pPort: SINTROP_TESTNET.p2pPort,
          httpPort: SINTROP_TESTNET.httpPort,
          image: "sin_geth",
          volume: "/go-sintrop/sequoia_node",
          hostDir: "~/sequoia_node",
        };

  const etherbase = wallet.trim() || WALLET_PLACEHOLDER;
  const walletLooksOff =
    wallet.trim().length > 0 && !/^0x[0-9a-fA-F]{40}$/.test(wallet.trim());

  const gethCommand = (prefix: string, extraFlags = "") =>
    `${prefix}geth --identity ${cfg.identity} --datadir ${cfg.datadir} ${cfg.flag} --syncmode "full" --networkid ${cfg.networkId} --cache=1024 --port ${cfg.p2pPort}${extraFlags} --http.vhosts=* --http.addr "0.0.0.0" --http.port ${cfg.httpPort} --http=true --miner.threads=1 --miner.etherbase=${etherbase} console`;

  const steps = useMemo(() => {
    const list: {
      title: string;
      body: React.ReactNode;
    }[] = [];

    // 1. Prerequisites
    list.push({
      title: labels.stepPrereqTitle,
      body: (
        <p className="text-ink-soft">
          {method === "docker"
            ? labels.stepPrereqDocker
            : labels.stepPrereqBinary}
        </p>
      ),
    });

    // 2. Get the client
    list.push({
      title: labels.stepGetTitle,
      body:
        method === "docker" ? (
          <div className="flex flex-col gap-3">
            <p className="text-ink-soft">{labels.stepGetDockerClone}</p>
            <CommandBlock
              caption="bash"
              copyLabel={labels.copy}
              copiedLabel={labels.copied}
              command={`git clone https://github.com/sintrop/go-sintrop.git\ncd go-sintrop\ndocker build -t ${cfg.image} .`}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-ink-soft">{labels.stepGetBinary}</p>
            <a
              href={CLIENT_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:underline"
            >
              {labels.stepGetReleasesCta}
              <FiArrowUpRight size={15} />
            </a>
          </div>
        ),
    });

    // 3. Start the node
    list.push({
      title: labels.stepStartTitle,
      body:
        method === "docker" ? (
          <div className="flex flex-col gap-3">
            <p className="text-ink-soft">{labels.stepStartDockerDesc}</p>
            <CommandBlock
              caption="bash"
              copyLabel={labels.copy}
              copiedLabel={labels.copied}
              command={`docker run -p ${cfg.p2pPort}:${cfg.p2pPort} -p ${cfg.httpPort}:${cfg.httpPort} -it -v ${cfg.hostDir}:${cfg.volume} ${cfg.image}`}
            />
            <p className="text-ink-soft">{labels.stepStartDockerGeth}</p>
            <CommandBlock
              caption="container shell"
              copyLabel={labels.copy}
              copiedLabel={labels.copied}
              command={gethCommand("", " --authrpc.addr localhost --authrpc.port 8551")}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-ink-soft">{labels.stepStartBinaryDesc}</p>
            <CommandBlock
              caption="bash"
              copyLabel={labels.copy}
              copiedLabel={labels.copied}
              command={gethCommand("./")}
            />
          </div>
        ),
    });

    // 4. Mining
    list.push({
      title: labels.stepMineTitle,
      body: (
        <div className="flex flex-col gap-3">
          <p className="text-ink-soft">{labels.stepMineDesc}</p>
          <CommandBlock
            caption="geth console"
            copyLabel={labels.copy}
            copiedLabel={labels.copied}
            command={`miner.start()\n// miner.stop()`}
          />
          <p className="text-sm text-ink-soft">{labels.stepMineGpu}</p>
        </div>
      ),
    });

    // 5. Verify
    list.push({
      title: labels.stepVerifyTitle,
      body: (
        <div className="flex flex-col gap-3">
          <p className="text-ink-soft">{labels.stepVerifyDesc}</p>
          <CommandBlock
            caption="geth console"
            copyLabel={labels.copy}
            copiedLabel={labels.copied}
            command={`net.peerCount\neth.syncing\neth.blockNumber`}
          />
          <p className="text-sm text-ink-soft">{labels.stepStopNote}</p>
        </div>
      ),
    });

    return list;
  }, [labels, method, cfg, gethCommand]);

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl">{labels.builderTitle}</h2>
      <p className="mt-2 text-ink-soft">{labels.builderLead}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Choice
          legend={labels.builderNetwork}
          options={[
            { value: "mainnet", label: labels.builderNetworkMainnet },
            { value: "testnet", label: labels.builderNetworkTestnet },
          ]}
          value={network}
          onChange={(v) => setNetwork(v as NetworkChoice)}
        />
        <Choice
          legend={labels.builderMethod}
          options={[
            { value: "docker", label: labels.builderMethodDocker },
            { value: "binary", label: labels.builderMethodBinary },
          ]}
          value={method}
          onChange={(v) => setMethod(v as MethodChoice)}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="reward-wallet"
          className="text-sm font-medium text-ink"
        >
          {labels.builderWallet}
        </label>
        <input
          id="reward-wallet"
          type="text"
          inputMode="text"
          autoComplete="off"
          spellCheck={false}
          placeholder={WALLET_PLACEHOLDER}
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="mt-2 w-full rounded-xl border border-line bg-page px-4 py-3 font-anta text-sm text-ink outline-none focus:border-brand"
        />
        <p className="mt-1.5 text-xs text-ink-soft">
          {walletLooksOff ? labels.builderWalletInvalid : labels.builderWalletHint}
        </p>
      </div>

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

interface ChoiceProps {
  legend: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

function Choice({ legend, options, value, onChange }: ChoiceProps) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">{legend}</legend>
      <div className="mt-2 flex gap-2">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
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
  );
}
