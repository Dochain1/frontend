import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UploadDocumentDialog from '../../components/UploadDocumentDialog';
import {
  Box,
  Button,
  Heading,
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useWeb3React } from '@web3-react/core';
import { decryptData, decryptPGP } from '../../utils/encrypt';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useEffect } from 'react';
import useApi from '../../hooks/useApi';

const Case = () => {
  // eslint-disable-next-line no-unused-vars
  const [documents, setDocuments] = useState([]);
  const { account } = useWeb3React();
  const { state } = useContext(GlobalContext);
  const { getDocuments, getFile } = useApi();
  const {
    query: { caseId },
  } = useRouter();

  const hashMapColorByTypeDocument = new Map([
    ['Evidencia', { color: 'purple', typeDocument: 'Evidencia' }],
    ['Memorial', { color: 'green', typeDocument: 'Memorial' }],
    ['Prueba', { color: 'yellow', typeDocument: 'Prueba' }],
    ['Requerimiento', { color: 'red', typeDocument: 'Requerimiento' }],
    ['Resolución', { color: 'blue', typeDocument: 'Resolución' }],
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDocuments(caseId);
      setDocuments(res.documents);
      console.log(documents);
    };
    fetchData();
  }, [caseId]);

  const fetchEncryptedData = async (tokenId) => {
    //const PK = state.privateKeys[0];
    const response = await getFile(account, tokenId, caseId);
    console.log(response);
    // const privateKeyPGP = await decryptData(PK, account);

    // const decryptFile = await decryptPGP(
    //   new Uint8Array(res.encryptedFile.data),
    //   privateKeyPGP
    // );
    // const fileToSave = new Blob([new Uint8Array(decryptFile)]);
    // saveFile(fileToSave);
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

  let bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <>
      <Box>
        <Heading as="h2" fontSize="4xl" textAlign="center" p="0px">
          Documentos del caso: {`CBBA500${caseId}`}
        </Heading>
      </Box>

      <Box textAlign="right">
        <UploadDocumentDialog caseId={caseId} alignItems="center" />
      </Box>

      <TableContainer
        p="40px"
        mt="20px"
        borderRadius="10px"
        boxShadow="2xl"
        bg={bg}
      >
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
            {}
            {documents.length > 0 ? (
              documents.map((document) => {
                return (
                  <Tr key={document.uri}>
                    <Td>{document.name}</Td>
                    <Td textAlign="center">31 Agosto 2022 - 18:00</Td>
                    <Td textAlign="center">
                      <Tag
                        colorScheme={
                          hashMapColorByTypeDocument.get(document.document_type)
                            .color
                        }
                      >
                        {
                          hashMapColorByTypeDocument.get(document.document_type)
                            .typeDocument
                        }
                      </Tag>
                    </Td>
                    <Td textAlign="center">
                      <Button
                        variant={'solid'}
                        colorScheme={'green'}
                        size="sm"
                        rightIcon={<ArrowForwardIcon />}
                        onClick={() => fetchEncryptedData(document.token_id)}
                      >
                        Abrir
                      </Button>
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td colSpan={4} textAlign="center">
                  No existen documentos para este caso
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Case;
