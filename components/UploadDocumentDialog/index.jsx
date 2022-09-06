import React, { useState, useEffect } from 'react';
import { 
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Select,
  Input,
  useDisclosure 
} from '@chakra-ui/react';
import { CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaSave } from 'react-icons/fa';
import { useWeb3React } from '@web3-react/core';
import { decryptData, decryptPGP, getPublicKey } from '../../utils/encrypt';

const UploadDocumentDialog = ({ caseId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { active, account } = useWeb3React();
    
    const [uploadDocument, setUploadDocument] = useState({
    documentName: '',
    documentType: '',
    documentFile: '',
    dateAndTimeOfUploadDocument: new Date(),
    caseId,
  });

  const documentTypes = [
    'Evidencia',
    'Memorial',
    'Prueba',
    'Requerimiento',
    'Resolucion',
  ];

  const onChangeHandler = (event) => {
    setUploadDocument({
      ...uploadDocument,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeFileInput = (e) => {
    setUploadDocument({ ...uploadDocument, documentFile: e.target.files[0] });
  };

  const saveUploadDocument = async () => {
    console.log(uploadDocument);

    let formData = new FormData();
    const publicKey = await getPublicKey(account);
    const keys = [publicKey, publicKey];
    for (const key of keys) {
      formData.append('keys', key);
    }
    formData.append('document', uploadDocument.documentFile);
    formData.append('documentName', uploadDocument.documentName);
    formData.append('documentType', uploadDocument.documentType);
    formData.append(
      'dateAndTimeOfUploadDocument',
      uploadDocument.dateAndTimeOfUploadDocument
    );
    formData.append('caseId', uploadDocument.caseId);

    const response = await fetch(
      'https://api-dochain.herokuapp.com/api/v1/documents/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    console.log(response);
    const res = await response.json();
    console.log(res);
    console.log(res.data.cid);
    closeDialog();
  };

  const closeDialog = () => {
    setUploadDocument({
      documentName: '',
      documentType: '',
      documentFile: '',
      dateAndTimeOfUploadDocument: new Date(),
      caseId,
    });
    onClose();
  };

  useEffect(() => {
    if (!active) {
      // User denied account access
      console.log('You must be login');
    }
  }, []);

  return <>
    <Button
      variant={"solid"}
      colorScheme={"green"}
      size={"sm"}
      leftIcon={<AddIcon />}
      onClick={onOpen}
    >Agregar Documento
    </Button>

    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar Documento</ModalHeader>
        
        <ModalBody>
          <FormControl id="documentName" isRequired mb='10px'>
            <FormLabel>Nombre del documento</FormLabel>
            <Input
              placeholder="Nombre del documento"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              name="documentName"
              value={uploadDocument.documentName}
              onChange={onChangeHandler}
            />
          </FormControl>

          <FormControl id="documentType" isRequired mb='10px'>
            <FormLabel>Tipo de documento</FormLabel>
            <Select placeholder='Tipo de documento' value={uploadDocument.documentType} onChange={onChangeHandler}>
              {documentTypes.map((documentType, index) => {
                return <option value={`${documentType}`} key={index}>{documentType}</option>
              })}
            </Select>
          </FormControl> 

          <FormControl id="documentFile" isRequired mb='10px'>
            <FormLabel>Documento</FormLabel>
            <Input
              placeholder="Lugar del caso"
              _placeholder={{ color: 'gray.500' }}
              type="file"
              name="casePlace"
              onChange={onChangeFileInput}
            />
          </FormControl>    
        </ModalBody>

        <ModalFooter>
          <Button
            variant={"solid"}
            colorScheme={"red"}
            size={"sm"}
            leftIcon={<CloseIcon />}
            onClick={() => closeDialog()}
            mr={3}
          >Cancelar
          </Button>
          <Button
            variant={"solid"}
            colorScheme={"green"}
            size={"sm"}
            leftIcon={<FaSave />}
            onClick={() => saveUploadDocument()}
          >Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>;
};

export default UploadDocumentDialog;
