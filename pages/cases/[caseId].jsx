import React, { useState } from 'react';
import { useRouter } from 'next/router';
import UploadDocumentDialog from '../../components/UploadDocumentDialog';
import {
  Box,
  Button,
  Heading,
  Spacer,
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';


const Case = () => {
  // eslint-disable-next-line no-unused-vars
  const [documents, setDocuments] = useState(Array(5).fill());

  const hashMapColorByTypeDocument = new Map([
    [1,{ color: "purple", typeDocument: "Evidencia"}],
    [2,{ color: "green", typeDocument: "Memorial"}],
    [3,{ color: "yellow", typeDocument: "Prueba"}],
    [4,{ color: "red", typeDocument: "Requerimiento"}],
    [5,{ color: "blue", typeDocument: "Resolucion"}],
  ]);

  const {
    query: { caseId },
  } = useRouter();

  return (
    <>
      <Box>
        <Heading as="h2" fontSize="4xl" textAlign='center' p='0px'>
          Documentos del caso: {caseId}
        </Heading>
        <Spacer/>
        <UploadDocumentDialog caseId={caseId}/>
      </Box>

      <TableContainer p="40px" mt="20px" borderRadius='10px' boxShadow='2xl'>
        <Table variant="striped" size='lg'>
          <Thead>
            <Tr>
              <Th fontSize="xl">Documento</Th>
              <Th fontSize="xl" textAlign="center">Fecha/Hora de subida</Th>
              <Th fontSize="xl" textAlign="center">Tipo de documento</Th>
              <Th fontSize="xl" textAlign="center">Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
          {documents.map((_, index) => {
            return <Tr>
              <Td>Documento</Td>
              <Td textAlign="center">31 Agosto 2022 - 18:00</Td>
              <Td textAlign="center">
                <Tag colorScheme={hashMapColorByTypeDocument.get(index+1).color}>{hashMapColorByTypeDocument.get(index+1).typeDocument}</Tag>
              </Td>
              <Td textAlign="center"><Button
                variant={"solid"}
                colorScheme={"green"}
                size='sm'
                rightIcon={<ArrowForwardIcon />}
                >
                  Abrir
                </Button>
              </Td>
            </Tr>
          })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Case;
