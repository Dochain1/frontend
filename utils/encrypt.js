import { encrypt } from '@metamask/eth-sig-util';
import { useWeb3React } from '@web3-react/core';
import {
  bufferToHex,
  fromRpcSig,
  ecrecover,
  toBuffer,
  pubToAddress,
} from 'ethereumjs-utils';
import * as openpgp from 'openpgp';

export const encryptData = async (encryptionPublicKey) => {
  const encryptedMessage = await bufferToHex(
    Buffer.from(
      JSON.stringify(
        encrypt({
          publicKey: encryptionPublicKey,
          data: 'hello world!',
          version: 'x25519-xsalsa20-poly1305',
        })
      ),
      'utf8'
    )
  );
  return encryptedMessage;
};

export const decryptData = async (encryptedMessage, account) => {
  let message;
  await ethereum
    .request({
      method: 'eth_decrypt',
      params: [encryptedMessage, account],
    })
    .then((decryptedMessage) => {
      message = decryptedMessage;
    })
    .catch((error) => console.log(error.message));
  return message;
};

export const decryptPGP = async (encrypted, privateKeyArmored) => {
  const encryptedMessage = await openpgp.readMessage({
    binaryMessage: encrypted,
  });
  const passphrase = `KEY`;
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
    passphrase,
  });
  const { data: decrypted } = await openpgp.decrypt({
    message: encryptedMessage,
    decryptionKeys: privateKey,
    format: 'binary',
  });
  return decrypted;
};

export const getPublicKey = async (account) => {
  // const accounts = await web3.eth.getAccounts();
  let encryptionPublicKey;
  await ethereum
    .request({
      method: 'eth_getEncryptionPublicKey',
      params: [account], // you must have access to the specified account
    })
    .then((result) => {
      encryptionPublicKey = result;
    })
    .catch((error) => {
      if (error.code === 4001) {
        console.log("We can't encrypt anything without the key.");
      } else {
        console.error(error);
      }
    });
  return encryptionPublicKey;
};

// Public key from account is different of public key to encrypt
// the key needed to encrypt is from getPublicKey()
// I keep this function for future references or changes

export const getPublicKeyFromSign = async () => {
  // This method consist in sign a message and recover public key from RpcSig.
  let accounts = await web3.eth.getAccounts();
  let msg = 'Some data';

  let sig = await web3.eth.sign(web3.utils.sha3('Hello world'), accounts[0]);
  const res = fromRpcSig(sig);
  console.log(res);

  const pubKey = ecrecover(
    toBuffer(web3.utils.sha3('Hello world')),
    res.v,
    res.r,
    res.s
  );
  const addrBuf = pubToAddress(pubKey);
  const addr = bufferToHex(addrBuf);
  // console.log(accounts[0], addr, pubKey.toString('hex'), pubKey);
  return { pubKey, addr };
};

// const saveFile = async (file) => {
//   const buf = new Buffer.from(file);
//   fs.writeFileSync('./gatitoDesencriptado.jpg', buf);
// };