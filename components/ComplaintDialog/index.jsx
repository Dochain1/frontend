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
  Input,
  Textarea,
  useDisclosure 
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FaSave } from 'react-icons/fa';


const ComplaintDialog = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [complaint, setComplaint] = useState({
      typeComplaint : "",
      dateAndTimeOfComplaint : new Date(),
      casePlace : "",
      crime : "",
      crimeDate : "",
      crimePlace : "",
      defendant : "",
      demanding : "",
      defendantLawyer : "",
      demandingLawyer : "",
    });

    const onChangeHandler = (event) => {
      setComplaint({ ...complaint, [event.target.name]: event.target.value });
    };

    const saveComplaint = () => {
      //save Complaint to Blockchain
      closeDialog();
    }

    const closeDialog = () =>{
      setComplaint({
        typeComplaint : "",
        dateAndTimeOfComplaint : new Date(),
        casePlace : "",
        crime : "",
        crimeDate : "",
        crimePlace : "",
        defendant : "",
        demanding : "",
        defendantLawyer : "",
        demandingLawyer : "",
      })
      onClose();
    }

    return <>
      <Button onClick={onOpen}>Nueva Denuncia</Button>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nueva Denuncia</ModalHeader>
          
          <ModalBody>
            <FormControl id="typeComplaint" isRequired mb='10px'>
              <FormLabel>Tipo de denuncia</FormLabel>
              <Input
                placeholder="Tipo de denuncia"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="typeComplaint"
                value={complaint.typeComplaint}
                onChange={onChangeHandler}
              />
            </FormControl>

            <FormControl id="casePlace" isRequired mb='10px'>
              <FormLabel>Lugar del caso</FormLabel>
              <Input
                placeholder="Lugar del caso"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="casePlace"
                value={complaint.casePlace}
                onChange={onChangeHandler}
              />
            </FormControl>

            <FormControl id="crime" isRequired mb='10px'>
              <FormLabel>Crimen</FormLabel>
              <Textarea
                name="crime"
                onChange={onChangeHandler}
                placeholder="Crimen"
                _placeholder={{ color: 'gray.500' }}
                size='sm'
              />
            </FormControl>

            <FormControl id="crimeDate" isRequired mb='10px'>
              <FormLabel>Fecha de Crimen</FormLabel>
              <Input
                placeholder="Fecha de Crimen"
                _placeholder={{ color: 'gray.500' }}
                type="date"
                name="crimeDate"
                value={complaint.crimeDate}
                onChange={onChangeHandler}
              />
            </FormControl>

            <FormControl id="crimePlace" isRequired mb='10px'>
              <FormLabel>Lugar de Crimen</FormLabel>
              <Input
                placeholder="Lugar de Crimen"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="crimePlace"
                value={complaint.crimePlace}
                onChange={onChangeHandler}
              />
            </FormControl>
            
            <FormControl id="defendant" isRequired mb='10px'>
              <FormLabel>Nombre del demandante</FormLabel>
              <Input
                placeholder="Nombre del demandante"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="defendant"
                value={complaint.defendant}
                onChange={onChangeHandler}
              />
            </FormControl>
            
            <FormControl id="demanding" isRequired mb='10px'>
              <FormLabel>Nombre del demandado</FormLabel>
              <Input
                placeholder="Nombre del demandado"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="demanding"
                value={complaint.demanding}
                onChange={onChangeHandler}
              />
            </FormControl>

            <FormControl id="defendantLawyer" isRequired mb='10px'>
              <FormLabel>Abogado del demandante</FormLabel>
              <Input
                placeholder="Abogado del demandante"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="defendantLawyer"
                value={complaint.defendantLawyer}
                onChange={onChangeHandler}
              />
            </FormControl>

            <FormControl id="demandingLawyer" isRequired mb='10px'>
              <FormLabel>Abogado del demandado</FormLabel>
              <Input
                placeholder="Abogado del demandado"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                name="demandingLawyer"
                value={complaint.demandingLawyer}
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
              onClick={() => saveComplaint()}
            >Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>;
};

export default ComplaintDialog;
