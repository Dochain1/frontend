import React, { useRef, useState } from 'react';
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
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaSave } from 'react-icons/fa';
import useApi from '../../hooks/useApi';
import { useWeb3React } from '@web3-react/core';

const ComplaintDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account } = useWeb3React();
  const { addBriefcase, loading } = useApi();
  const form = useRef(null);
  const toast = useToast();

  const [complaint, setComplaint] = useState({
    typeComplaint: '',
    casePlace: '',
    crime: '',
    dateAndTimeOfComplaint: '',
    crimePlace: '',
    defendant: '',
    demanding: '',
    defendantLawyer: '',
    demandingLawyer: '',
  });

  const onChangeHandler = (event) => {
    setComplaint({ ...complaint, [event.target.name]: event.target.value });
  };

  const saveComplaint = async (e) => {
    e.preventDefault();
    try {
      await addBriefcase({ ...complaint, users: [account] });
      toast({
        title: 'Caso creado correctamente',
        description: 'Su denuncia fue añadida a nuestros registros',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      closeDialog();
    } catch (e) {
      toast({
        title: 'Ocurrió un error',
        description: 'No te preocupes, no es tu culpa',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const closeDialog = () => {
    setComplaint({
      typeComplaint: '',
      casePlace: '',
      crime: '',
      dateAndTimeOfComplaint: '',
      crimePlace: '',
      defendant: '',
      demanding: '',
      defendantLawyer: '',
      demandingLawyer: '',
    });
    onClose();
  };

  return (
    <>
      <Button
        variant={'solid'}
        colorScheme={'green'}
        size={'sm'}
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Nueva Denuncia
      </Button>

      <Modal onClose={onClose} isOpen={isOpen}>
        <form ref={form} onSubmit={saveComplaint} disabled={loading}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nueva Denuncia</ModalHeader>

            <ModalBody>
              <FormControl id="typeComplaint" isRequired mb="10px">
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

              <FormControl id="casePlace" isRequired mb="10px">
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

              <FormControl id="crime" isRequired mb="10px">
                <FormLabel>Crimen</FormLabel>
                <Textarea
                  name="crime"
                  onChange={onChangeHandler}
                  placeholder="Crimen"
                  _placeholder={{ color: 'gray.500' }}
                  size="sm"
                />
              </FormControl>

              <FormControl id="crimeDate" isRequired mb="10px">
                <FormLabel>Fecha de Crimen</FormLabel>
                <Input
                  placeholder="Fecha de Crimen"
                  _placeholder={{ color: 'gray.500' }}
                  type="date"
                  name="dateAndTimeOfComplaint"
                  value={complaint.dateAndTimeOfComplaint}
                  onChange={onChangeHandler}
                />
              </FormControl>

              <FormControl id="crimePlace" isRequired mb="10px">
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

              <FormControl id="defendant" isRequired mb="10px">
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

              <FormControl id="demanding" isRequired mb="10px">
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

              <FormControl id="defendantLawyer" isRequired mb="10px">
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

              <FormControl id="demandingLawyer" isRequired mb="10px">
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
                variant={'solid'}
                colorScheme={'red'}
                size={'sm'}
                leftIcon={<CloseIcon />}
                onClick={() => closeDialog()}
                mr={3}
              >
                Cancelar
              </Button>
              <Button
                variant={'solid'}
                colorScheme={'green'}
                size={'sm'}
                leftIcon={<FaSave />}
                type="submit"
                isLoading={loading}
              >
                Guardar
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ComplaintDialog;
