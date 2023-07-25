/**
 * List of all the chains/networks supported
 */
export enum Chain {
  ETH = 'ETH',
  AVAX = 'AVAX',
  ARB = 'ARB',
  MATIC = 'MATIC',
}

/**
 * List of all the chain/network IDs supported
 */
export enum SupportedChainId {
  ETH_GOERLI = 5,
  AVAX_FUJI = 43113,
  ARB_GOERLI = 421613,
  MATIC_MUMBAI = 80001,

  ETH_MAINNET = 1,
  AVAX_MAINNET = 43114,
  ARB_MAINNET = 42161,
  MATIC_MAINNET = 137,
}

/**
 * List of all the chain/network IDs supported in hexadecimals
 * TODO: Infer from SupportedChainId
 */
export const SupportedChainIdHex = {
  ETH_GOERLI: '0x5',
  AVAX_FUJI: '0xa869',
  ARB_GOERLI: '0x66eed',
  MATIC_MUMBAI: '0x13881',

  ETH_MAINNET: '0x1',
  AVAX_MAINNET: '0xa86a',
  ARB_MAINNET: '0x66ea',
  MATIC_MAINNET: '0x89',
}

interface ChainToChainIdMap {
  [key: string]: number
}

/**
 * Maps a chain to it's chain ID
 */

export const CHAIN_TO_CHAIN_ID: ChainToChainIdMap = {
  [Chain.ETH]: SupportedChainId.ETH_MAINNET,
  [Chain.AVAX]: SupportedChainId.AVAX_MAINNET,
  [Chain.ARB]: SupportedChainId.ARB_MAINNET,
  [Chain.MATIC]: SupportedChainId.MATIC_MAINNET,
}

interface ChainToChainNameMap {
  [key: string]: string
}

/**
 * Maps a chain to it's readable name
 */
export const CHAIN_TO_CHAIN_NAME: ChainToChainNameMap = {
  ETH: 'Ethereum',
  AVAX: 'Avalanche',
  ARB: 'Arbitrum',
  MATIC: 'Polygon',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

/**
 * List of Circle-defined IDs referring to specific domains
 */
export enum DestinationDomain {
  ETH = 0,
  AVAX = 1,
  ARB = 3,
  MATIC = 4,
}

// https://eips.ethereum.org/EIPS/eip-3085
interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

const ETH_GOERLI: AddEthereumChainParameter = {
  chainId: '0x5',
  blockExplorerUrls: ['https://goerli.etherscan.io'],
  chainName: 'Goerli Test Network',
  nativeCurrency: {
    name: 'Goerli ETH',
    symbol: 'gorETH',
    decimals: 18,
  },
  rpcUrls: ['https://goerli.infura.io/v3/'],
}

const AVAX_FUJI: AddEthereumChainParameter = {
  chainId: '0xa869',
  blockExplorerUrls: ['https://testnet.snowtrace.io/'],
  chainName: 'Avalanche FUJI C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
}

const ARB_GOERLI: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_GOERLI,
  blockExplorerUrls: ['https://goerli.arbiscan.io/'],
  chainName: 'Arbitrum Goerli Testnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb-goerli.g.alchemy.com/v2/demo'],
}

const MATIC_MUMBAI: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.MATIC_MUMBAI,
  blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  chainName: 'Matic Mumbai Testnet',
  nativeCurrency: {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
}

const ETH_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ETH_MAINNET,
  blockExplorerUrls: ['https://etherscan.io/'],
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://mainnet.infura.io/v3/'],
}

const AVAX_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.AVAX_MAINNET,
  blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
  chainName: 'Avalanche Mainnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
}

const ARB_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.ARB_MAINNET,
  blockExplorerUrls: ['https://arbiscan.io/'],
  chainName: 'Arbitrum Mainnet',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://arb1.arbitrum.io/rpc'],
}

const MATIC_MAINNET: AddEthereumChainParameter = {
  chainId: SupportedChainIdHex.MATIC_MAINNET,
  blockExplorerUrls: ['https://polygonscan.com/'],
  chainName: 'Matic Mainnet',
  nativeCurrency: {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
}

interface ChainIdToChainParameters {
  [key: string]: AddEthereumChainParameter
}

export const CHAIN_ID_HEXES_TO_PARAMETERS: ChainIdToChainParameters = {
  [SupportedChainIdHex.ETH_GOERLI]: ETH_GOERLI,
  [SupportedChainIdHex.AVAX_FUJI]: AVAX_FUJI,
  [SupportedChainIdHex.ARB_GOERLI]: ARB_GOERLI,
  [SupportedChainIdHex.MATIC_MUMBAI]: MATIC_MUMBAI,
  [SupportedChainIdHex.ETH_MAINNET]: ETH_MAINNET,
  [SupportedChainIdHex.AVAX_MAINNET]: AVAX_MAINNET,
  [SupportedChainIdHex.ARB_MAINNET]: ARB_MAINNET,
  [SupportedChainIdHex.MATIC_MAINNET]: MATIC_MAINNET,
}
