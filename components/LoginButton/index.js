import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
import { connector } from '../../config/web3';
import { useCallback } from 'react';
import { AiOutlineDisconnect } from 'react-icons/ai';

const LoginButton = () => {
  const { account, activate, active, deactivate } = useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [active]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  //Do not disconnect when browser is refresh
  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
    console.log(localStorage.getItem('previouslyConnected'));
  }, []);

  const address = useTruncatedAddress(account);

  return (
    <div>
      {active ? (
        /*Is show when user is logged*/
        <>
          <div className="bg-blue-500 p-2 rounded text-xl">
            {address}
            <button onClick={disconnect}>
              <AiOutlineDisconnect />
            </button>
          </div>
        </>
      ) : (
        /*Logging button*/
        <button className="bg-orange-500 p-2 rounded text-xl" onClick={connect}>
          Conectar wallet
        </button>
      )}
    </div>
  );
};

export default LoginButton;
