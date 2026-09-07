import { CopyButton } from "./CopyButton";

interface Props {
  command: string;
  /** Optional caption shown above the command (e.g. "Terminal"). */
  caption?: string;
  copyLabel?: string;
  copiedLabel?: string;
}

/**
 * A dark, monospaced shell snippet with a copy control. `command` may span
 * multiple lines; the whole block is copied verbatim.
 */
export function CommandBlock({
  command,
  caption,
  copyLabel = "Copy",
  copiedLabel = "Copied",
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-forest/30 bg-brand-forest text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-anta text-[11px] uppercase tracking-wide text-white/50">
          {caption ?? "Terminal"}
        </span>
        <CopyButton
          value={command}
          label={copyLabel}
          copiedLabel={copiedLabel}
          className="text-white/70 hover:text-white"
        />
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed">
        <code className="font-mono">{command}</code>
      </pre>
    </div>
  );
}
