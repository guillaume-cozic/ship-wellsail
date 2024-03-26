import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, Alert, AlertIcon, FormControl, Input, Divider, Box, Textarea, Select, Stack, Switch,
} from '@chakra-ui/react'

export function ContactModal(props: {ship: Ship, isOpen: boolean, onClose:any}) {
    let ship = props.ship;

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
                        <FormControl>
                            <Input type='email' placeholder="Votre email"/>
                        </FormControl>
                        <FormControl mt={3}>
                            <Select>
                                <option value=''></option>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={3}>
                            <Textarea
                                placeholder='Votre message'
                                size='sm'
                                resize="vertical"
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
                        <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                            Envoyer
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
