import React, { useState } from 'react';
import { 
  Button,
  ButtonGroup,
  Checkbox, 
  CheckboxGroup,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { FaSave, FaUserPlus } from 'react-icons/fa';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';


const AssignedToCase = () => {
  // eslint-disable-next-line no-unused-vars
  const [assigneds, setAssigneds] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const address = useTruncatedAddress('0x2XIgBoQJMDWxhrQCMLePi3WzP3k6yYRkNNdq0Ur5');
  let truncatedAddressAssignes = Array(1).fill({truncatedAddressAssigne: address})

  const onChangeHandler = (e) => {
    setAssigneds(e);
  };

  const saveAssign = () => {
    // saveAssign to backend
    close();
  };

  const close = () =>{
    setAssigneds([]);
    onClose();
  };

  return <Popover onClose={close} isOpen={isOpen} onOpen={onOpen}>
    <PopoverTrigger>
      <Button
        variant={"solid"}
        colorScheme={"green"}
        size={"sm"}
        leftIcon={<FaUserPlus />}
      >Asiganción
      </Button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Asignar involucrado/a</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <CheckboxGroup colorScheme='green' onChange={onChangeHandler}>
            <Stack spacing={1} direction={['column']}>
              {truncatedAddressAssignes.map((item, index) => {
                return <Checkbox key={index} value={item.truncatedAddressAssigne}>{item.truncatedAddressAssigne}</Checkbox>
              })}
            </Stack>
          </CheckboxGroup>
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='right'
          pb={4}
        >
          <ButtonGroup size='sm'>
            <Button
              variant={"solid"}
              colorScheme={"green"}
              size={"sm"}
              leftIcon={<FaSave />}
              onClick={() => saveAssign()}
            >Guardar</Button>
            
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Portal>
  </Popover>
};

export default AssignedToCase;
