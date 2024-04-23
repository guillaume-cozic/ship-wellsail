import { chakra, Stack, Box, Button, useColorModeValue } from '@chakra-ui/react';
import { GoContainer } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import {useAppDispatch} from "../app/hooks";
import {fetchShips} from "../features/ships/shipsSlice";
import {FaShip} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const listPassengersShips = () => {
        dispatch(fetchShips({type: 'passengers'}));
        navigate('/passengers');
    }

    const listFreightShips = () => {
        dispatch(fetchShips({type: 'freight'}));
        navigate('/freight');
    }

    const listAllShips = () => {
        dispatch(fetchShips({type: undefined}));
        navigate('/');
    }

    return (
        <Box pb={8}>
            <Stack
                pos="relative"
                bgGradient={`linear(to-l, blue.500, blue.400, cyan.400)`}
                height="250px"
                w="100%"
            ></Stack>
            <Box maxW="3xl" p={4} isolation="isolate" zIndex={3} mt="-10rem" marginInline="auto">
                <Box
                    boxShadow={useColorModeValue(
                        '0 4px 6px rgba(160, 174, 192, 0.6)',
                        '0 4px 6px rgba(9, 17, 28, 0.9)'
                    )}
                    bg={useColorModeValue('white', 'gray.800')}
                    p={{ base: 4, sm: 8 }}
                    overflow="hidden"
                    rounded="2xl"
                >
                    <Stack pos="relative" zIndex={1} direction="column" spacing={5} textAlign="left">
                        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
                            WellSail
                        </chakra.h1>
                        <chakra.h1 color="gray.400" fontSize="xl" maxW="600px" lineHeight={1.2}>
                            WellSail repertorie les acteurs de la décarbonation du transport maritime
                            de marchandises et de passagers.
                        </chakra.h1>

                        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
                            <Button
                                leftIcon={<FaShip />}
                                colorScheme="green"
                                rounded="md"
                                variant='outline'
                                width='100%'
                                onClick={ () => listAllShips() }
                            >
                                Tous les navires
                            </Button>
                            <Button
                                leftIcon={<GoContainer />}
                                colorScheme="blue"
                                rounded="md"
                                variant='outline'
                                width='100%'
                                onClick={ () => listFreightShips() }
                            >
                                Marchandises
                            </Button>
                            <Button
                                leftIcon={<IoPerson />}
                                rounded="md"
                                colorScheme="cyan"
                                variant='outline'
                                onClick={ () => listPassengersShips() }
                                width='100%'
                            >
                                Passagers
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Index;
