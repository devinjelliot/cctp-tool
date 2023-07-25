import { SupportedChainId } from 'constants/chains'

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_GOERLI]: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',

  [SupportedChainId.AVAX_FUJI]: '0x5425890298aed601595a70AB815c96711a31Bc65',

  [SupportedChainId.ARB_GOERLI]: '0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63',

  [SupportedChainId.MATIC_MUMBAI]: '0x0fa8781a83e46826621b3bc094ea2a0212e71b23',

  [SupportedChainId.ETH_MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',

  [SupportedChainId.AVAX_MAINNET]: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',

  [SupportedChainId.ARB_MAINNET]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',

  [SupportedChainId.MATIC_MAINNET]:
    '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_GOERLI]: '0xd0c3da58f55358142b8d3e06c1c30c5c6114efe8',

  [SupportedChainId.AVAX_FUJI]: '0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0',

  [SupportedChainId.ARB_GOERLI]: '0x12dcfd3fe2e9eac2859fd1ed86d2ab8c5a2f9352',

  [SupportedChainId.MATIC_MUMBAI]: '0xdeadbeef00000000000000000000000000000',

  [SupportedChainId.ETH_MAINNET]: '0xbd3fa81b58ba92a82136038b25adec7066af3155',

  [SupportedChainId.AVAX_MAINNET]: '0x6b25532e1060ce10cc3b0a99e5683b91bfde6982',

  [SupportedChainId.ARB_MAINNET]: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',

  [SupportedChainId.MATIC_MAINNET]: '0xdeadbeef00000000000000000000000000000',
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_GOERLI]: '0x26413e8157cd32011e726065a5462e97dd4d03d9',

  [SupportedChainId.AVAX_FUJI]: '0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79',

  [SupportedChainId.ARB_GOERLI]: '0x109bc137cb64eab7c0b1dddd1edf341467dc2d35',

  [SupportedChainId.MATIC_MUMBAI]: '0xdeadbeef00000000000000000000000000000',

  [SupportedChainId.ETH_MAINNET]: '0x0a992d191DEeC32aFe36203Ad87D7d289a738F81',

  [SupportedChainId.AVAX_MAINNET]: '0x8186359af5f57fbb40c6b14a588d2a59c0c29880',

  [SupportedChainId.ARB_MAINNET]: '0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca',

  [SupportedChainId.MATIC_MAINNET]: '0xdeadbeef00000000000000000000000000000',
}
