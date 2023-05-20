import { NEXT_PUBLIC_CHAIN_ID } from "../constants/env";
 
export function getAvailableChainFlag(chainId) {
    if (!chainId) {
        return false
    }
    return NEXT_PUBLIC_CHAIN_ID.indexOf(parseInt(String(chainId).toString())) >= 0
}

export function getChainId(radix,chainId = NEXT_PUBLIC_CHAIN_ID[0]) {
    return (radix ? ('0x' + chainId.toString(16)) : NEXT_PUBLIC_CHAIN_ID[0])
}

