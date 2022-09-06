//import { Web3Provider } from '@ethersproject/providers';
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

const connector = new InjectedConnector({
  supportedChainIds: [
    3, //Ropsten
    4, //Rinkeby
    5, //goerli
  ],
});

function getLibrary(provider) {
  const library = new Web3(provider);
  library.pollingInterval = 12000;
  return library;
}

export { connector, getLibrary };