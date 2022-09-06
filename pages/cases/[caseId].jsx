import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UploadDocumentDialog from '../../components/UploadDocumentDialog';
import {
  Box,
  Button,
  // eslint-disable-next-line no-unused-vars
  Flex,
  Heading,
  // eslint-disable-next-line no-unused-vars
  Spacer,
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useWeb3React } from '@web3-react/core';
import { decryptData, decryptPGP } from '../../utils/encrypt';
import { GlobalContext } from '../../contexts/GlobalContext';

const Case = () => {
  // eslint-disable-next-line no-unused-vars
  const [documents, setDocuments] = useState(Array(5).fill());
  const { account } = useWeb3React();
  const { state } = useContext(GlobalContext);

  const hashMapColorByTypeDocument = new Map([
    [1, { color: 'purple', typeDocument: 'Evidencia' }],
    [2, { color: 'green', typeDocument: 'Memorial' }],
    [3, { color: 'yellow', typeDocument: 'Prueba' }],
    [4, { color: 'red', typeDocument: 'Requerimiento' }],
    [5, { color: 'blue', typeDocument: 'Resolución' }],
  ]);

  const fetchEncryptedData = async (cid) => {
    const response = await fetch(
      'https://api-dochain.herokuapp.com/api/v1/documents/get_file',
      {
        method: 'POST',
        body: JSON.stringify({
          cid: cid,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const res = await response.json();
    const PK = state.privateKeys[0];
    const privateKeyPGP = await decryptData(PK, account);

    const decryptFile = await decryptPGP(
      new Uint8Array(res.encryptedFile.data),
      privateKeyPGP
    );
    const fileToSave = new Blob([new Uint8Array(decryptFile)]);
    saveFile(fileToSave);
  };

  const saveFile = async (blob) => {
    const a = document.createElement('a');
    a.download = 'my-file.txt';
    a.href = URL.createObjectURL(blob);
    // eslint-disable-next-line no-unused-vars
    a.addEventListener('click', (_e) => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
  };

  const {
    query: { caseId },
  } = useRouter();

  return (
    <>
      <Box>
        <Heading as="h2" fontSize="4xl" textAlign="center" p="0px">
          Documentos del caso: {caseId}
        </Heading>
      </Box>

      <Box textAlign="right">
        <UploadDocumentDialog caseId={caseId} alignItems="center" />
      </Box>

      <TableContainer p="40px" mt="20px" borderRadius="10px" boxShadow="2xl">
        <Table variant="striped" size="lg">
          <Thead>
            <Tr>
              <Th fontSize="xl">Documento</Th>
              <Th fontSize="xl" textAlign="center">
                Fecha/Hora de subida
              </Th>
              <Th fontSize="xl" textAlign="center">
                Tipo de documento
              </Th>
              <Th fontSize="xl" textAlign="center">
                Acciones
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {documents.map((_, index) => {
              return (
                <Tr key={index}>
                  <Td>Documento</Td>
                  <Td textAlign="center">31 Agosto 2022 - 18:00</Td>
                  <Td textAlign="center">
                    <Tag
                      colorScheme={
                        hashMapColorByTypeDocument.get(index + 1).color
                      }
                    >
                      {hashMapColorByTypeDocument.get(index + 1).typeDocument}
                    </Tag>
                  </Td>
                  <Td textAlign="center">
                    <Button
                      variant={'solid'}
                      colorScheme={'green'}
                      size="sm"
                      rightIcon={<ArrowForwardIcon />}
                      onClick={() => fetchEncryptedData(state.cid)}
                    >
                      Abrir
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Case;
