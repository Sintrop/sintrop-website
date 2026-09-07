"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  /** Render just the icon (used inside dense rows and code blocks). */
  iconOnly?: boolean;
}

/**
 * Copies `value` to the clipboard and briefly confirms. Falls back silently
 * when the Clipboard API is unavailable (e.g. insecure context).
 */
export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  className = "",
  iconOnly = false,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — nothing we can do here */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${className}`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {!iconOnly && <span>{copied ? copiedLabel : label}</span>}
    </button>
  );
}
