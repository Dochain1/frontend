import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
import { connector } from '../../config/web3';
import { useCallback } from 'react';

const LoginButton = () => {
  const { account, activate, active, deactivate } = useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  //Do not disconnect when browser is refresh
  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
  }, [connect]);

  const address = useTruncatedAddress(account);

  return (
    <div>
      {active ? (
        /*Is show when user is logged*/
        <>
          <div>{address}</div>
          <button onClick={disconnect}>X</button>
        </>
      ) : (
        /*Logging button*/
        <button className="wallet-connect" onClick={connect}>
          Conectar wallet
        </button>
      )}
    </div>
  );
};

export default LoginButton;
