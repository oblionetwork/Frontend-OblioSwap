import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { NEXT_PUBLIC_CHAIN_ID, NEXT_PUBLIC_RPC_URL_1, NEXT_PUBLIC_RPC_URL_42, NEXT_PUBLIC_RPC_URL_65,NEXT_PUBLIC_RPC_URL_66 } from './env'

// only eth / ok chain

export const RPC_URLS = {
  1: NEXT_PUBLIC_RPC_URL_1,
  42:NEXT_PUBLIC_RPC_URL_42,
  65: NEXT_PUBLIC_RPC_URL_65,
  66: NEXT_PUBLIC_RPC_URL_66,
}

export const injected = new InjectedConnector({ supportedChainIds: NEXT_PUBLIC_CHAIN_ID })

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    42: RPC_URLS[42],
    65: RPC_URLS[65],
    66: RPC_URLS[66],
  },
  qrcode: true,
})




export const supportChainConfig = {
  "1": {
    chainId: "1",
    chainName: "ETH",
  },
  "42": {
    chainId: "0x2a",
    chainName: "Kovan-ETH",
  },
  "65": {
    chainId: "0x41",
    chainName: "OEC Testnet",
    rpcUrls: "https://exchaintestrpc.okex.org",
    iconUrls: "",
    blockExplorerUrls: "https://www.oklink.com/oec-test/",
    nativeCurrency: {
      name: 'OKT',
      symbol: 'OKT',
      decimals: 18
    }
  },
  "66": {
    chainId: "0x42",
    chainName: "OKExChain",
    rpcUrls: "https://exchainrpc.okex.org",
    iconUrls: "",
    blockExplorerUrls: "https://www.oklink.com/okexchain",
    nativeCurrency: {
      name: 'OKT',
      symbol: 'OKT',
      decimals: 18
    }
  }
}



