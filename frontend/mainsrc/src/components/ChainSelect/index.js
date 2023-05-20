import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import cls from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { injected, supportChainConfig } from '../../constants/connectors'
import { current_test_chainId } from '../../constants/env'
import { getAvailableChainFlag, getChainId } from '../../utils'
import MenuList, { MenuItem } from '../MenuList'
import './index.scss'
import OutsideClickHandler from 'react-outside-click-handler';

export default function ChainSelect() {
  const context = useWeb3React()
  const { chainId, library, connector, activate } = context

  const [realChainId, setRealChainId] = useState(-1)
  const [visible, setVisible] = useState(false)
  const onChainSelectClick = useCallback(() => {
    setVisible(state => !state)
  }, [])

  const [networkInfo, setNetworkInfo] = useState({})

  useEffect(() => {
    if (library?.network) {
      setNetworkInfo(library.network)
    }
  }, [library?.network])


  const onSwitchNetwork = useCallback(async (newChainId) => {
    try {
      await new Web3Provider(await connector?.getProvider()).send('wallet_switchEthereumChain', [
        {
          chainId: getChainId(true, newChainId)
        }
      ])
    } catch (e) {
      if (e?.code === 4902) {// chain not exist
        let newId = newChainId.toString()
        addMetamaskNetwork(supportChainConfig[newId])
      }
    }
  }, [connector, Web3Provider])

  const onChangeChain = useCallback((newChainId) => {
    if (newChainId === realChainId) {
      setVisible(false)
      return
    }
    onSwitchNetwork(newChainId)
    setVisible(false)
  }, [realChainId, connector])

  const [currentChain, setCurrentChain] = useState()

  const initChain = useCallback(async () => {
    let realChainId = await getCurrentChainId()
    realChainId = realChainId || chainId
    setRealChainId(realChainId)
  }, [chainId])

  useEffect(() => {
    initChain()
  }, [chainId])

  useEffect(() => {
    if (realChainId && getAvailableChainFlag(realChainId)) {
      let config = supportChainConfig[realChainId?.toString()]
      let name = config.chainName
      setCurrentChain(name)

    } else {
      if (!connector) {
        if (window?.ethereum) {
          requestMetamaskConnect()
        }
      }
      setCurrentChain("Not Support")
      onSwitchNetwork(current_test_chainId)
    }
  }, [realChainId, networkInfo, connector])

  const requestMetamaskConnect = useCallback(async () => {
    await activate(injected).catch(err => {
      return err
    })
  }, [])

  const onOffClick = useCallback(() => {
    if (visible) {
      setVisible(false)
    }
  }, [visible])

  return (<div className={"chainSelectContainer"}>
    <div className={"currentLocal"} onClick={onChainSelectClick}>
      <p className={"chainName"}>
        {
          currentChain
        }
      </p>
      <div className={cls("iconGray", "iconContainer", visible ? "arrowUp" : "arrowDown")}>
        <img className={"selectArrow"} src={"/img/down_arrow.svg"} />
      </div>
    </div>
    <OutsideClickHandler onOutsideClick={onOffClick}>
      <MenuList visible={visible} className={"menulist"}>
        <MenuItem className={"menuListItem"} onClick={() => onChangeChain(1)}>
          <div>{supportChainConfig["1"].chainName}</div>
        </MenuItem>
        <MenuItem className={"menuListItem"} onClick={() => onChangeChain(65)}>
          <div>{supportChainConfig["65"].chainName}</div>
        </MenuItem>
        <MenuItem className={"menuListItem"} onClick={() => onChangeChain(66)}>
          <div>{supportChainConfig["66"].chainName}</div>
        </MenuItem>
      </MenuList>
    </OutsideClickHandler>
  </div>)
}


async function getCurrentChainId() {
  if (window && window.ethereum) {
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    return parseInt(chainId)
  }
  return -1
}


function addMetamaskNetwork(config) {
  if (window && window.ethereum) {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: config.chainId,
        chainName: config.chainName,
        rpcUrls: [
          config.rpcUrls
        ],
        iconUrls: [
        ],
        blockExplorerUrls: [
          config.blockExplorerUrls
        ],
        nativeCurrency: {
          name: config.nativeCurrency.name,
          symbol: config.nativeCurrency.symbol,
          decimals: config.nativeCurrency.decimals
        }
      }]
    })
  }
}
