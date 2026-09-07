/**
 * Canonical Sintrop mainnet (and Sequoia testnet) parameters. Every page that
 * shows connection details, wallet config or node commands reads from here.
 */
export const SINTROP_MAINNET = {
  name: "Sintrop",
  chainId: 250225,
  chainIdHex: "0x3D171",
  currencyName: "SINTROP",
  currencySymbol: "SIN",
  decimals: 18,
  rpcUrl: "https://rpc.sintrop.com",
  explorerUrl: "https://explorer.sintrop.com",
  p2pPort: 25225,
  httpPort: 8545,
} as const;

export const SINTROP_TESTNET = {
  name: "Sequoia",
  chainId: 1600,
  explorerUrl: "https://sequoia.sintrop.com",
  p2pPort: 30303,
  httpPort: 8545,
} as const;

export const CLIENT_REPO = "https://github.com/sintrop/go-sintrop";
export const CLIENT_RELEASES = "https://github.com/sintrop/go-sintrop/releases";
