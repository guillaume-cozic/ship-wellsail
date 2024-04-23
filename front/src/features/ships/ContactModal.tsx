import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, Alert, AlertIcon, FormControl, Input, Divider, Box, Textarea, Stack, Switch, useToast,
} from '@chakra-ui/react'
import type Ship from "../api/Ship";
import {useAppDispatch} from "../../app/hooks";
import {requestFreightTransport} from "./shipsSlice";
import {useState} from "react";

export function ContactModal(props: {ship: Ship, isOpen: boolean, onClose:any}) {
    let ship = props.ship;
    const [ email, setEmail ] = useState('');
    const [ content, setContent ] = useState('');
    const dispatch = useAppDispatch();
    let [ emailIsInvalid, setEmailIsInvalid ] = useState(false);

    const dispatchFreightRequest = async () => {
        if (email === '') {
            setEmailIsInvalid(true);
            return;
        }

        if (!emailIsInvalid && !emailIsInvalid) {
            dispatch(requestFreightTransport({
                shipId: ship.id,
                email: email,
                content: content
            }));
            props.onClose();
        }
    }

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Contacter { ship.title }</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Alert status='info' variant='left-accent'>
                            <AlertIcon />
                            Wellsail cherche à accompagner les acteurs du transport de marchandises ou
                            de passagers utilisant la propulsion vélique.
                        </Alert>
                        <Box position='relative' padding='10'>
                            <Divider />
                        </Box>
                        <FormControl isInvalid={emailIsInvalid}>
                            <Input
                                type='email'
                                placeholder="Votre email *"
                                onChange={(e) => setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl mt={3}>
                            <Textarea
                                placeholder='Votre message *'
                                size='sm'
                                resize="vertical"
                                rows={8}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </FormControl>
                        <Box position='relative' padding='10'>
                            <Divider />
                        </Box>
                        <Alert status='success' variant='left-accent'>
                            <Stack direction='row' mr={3}>
                                <Switch colorScheme='teal' size='lg' />
                            </Stack>
                            Je souhaite être contacté par velic-consulting, un collectif de freelances pour échanger
                            à propos de mes besoins autour du transport à la voile
                        </Alert>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => dispatchFreightRequest()}>
                            Envoyer
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
