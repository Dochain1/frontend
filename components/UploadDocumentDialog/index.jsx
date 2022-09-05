import React, { useState } from 'react';
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
  Textarea,
  useDisclosure 
} from '@chakra-ui/react';
import { CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaSave } from 'react-icons/fa';

const UploadDocumentDialog = ({ caseId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [uploadDocument, setUploadDocument] = useState({
      documentName : "",
      documentType : "",
      documentFile : "",
      dateAndTimeOfUploadDocument : new Date(),
      caseId
    });

    const documentTypes = ['Evidencia', 'Memorial', 'Prueba', 'Requerimiento', 'Resolucion'];

    const onChangeHandler = (event) => {
      setUploadDocument({ ...uploadDocument, [event.target.name]: event.target.value });
    };

    const saveUploadDocument = () => {
      //save document to case on the Blockchain
      closeDialog();
    }

    const closeDialog = () =>{
      setUploadDocument({
        documentName : "",
        documentType : "",
        documentFile : "",
        dateAndTimeOfUploadDocument : new Date(),
        caseId
      })
      onClose();
    }

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

            <FormControl id="casePlace" isRequired mb='10px'>
              <FormLabel>Lugar del caso</FormLabel>
              <Input
                placeholder="Lugar del caso"
                _placeholder={{ color: 'gray.500' }}
                type="file"
                name="casePlace"
                value={uploadDocument.casePlace}
                onChange={onChangeHandler}
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
