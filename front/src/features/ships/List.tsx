import {Fragment, useEffect} from 'react';
import {
    chakra,
    Stack,
    VStack,
    Flex,
    Text,
    Image,
    Container,
    Badge, Button, Link, HStack
} from '@chakra-ui/react';
import {IoTicketSharp} from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchShips, selectShips} from "./shipsSlice";
import {FaPeopleCarry} from "react-icons/fa";
import {ContactCarrier} from "./ContactCarrier";
import VelicConsulting from "./VelicConsulting";

const List = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchShips({type: undefined}));
    }, [dispatch]);

    let ships = useAppSelector(selectShips);

    return (
        <Container p={{ base: 8, md: 12 }} margin="0 auto">
            <VStack spacing={4}>
                {ships && ships.map((ship, index) => (
                    <>
                    <Stack
                        key={index}
                        spacing={{ base: 0, md: 4 }}
                        direction={{ base: 'column', md: 'row' }}
                        border="1px solid"
                        borderColor="gray.400"
                        p={2}
                        rounded="md"
                        w={{ base: 'auto', md: '5xl' }}
                        overflow="hidden"
                        pos="relative"
                    >
                        <Flex ml="0 !important">
                            <Image
                                rounded="md"
                                w={{ base: '100%', md: '18rem' }}
                                h="auto"
                                objectFit="cover"
                                src={ ship.image }
                                alt="product image"
                            />
                        </Flex>
                        <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }}>
                            <HStack justifyContent="space-between">
                                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                                    { ship.title }
                                </chakra.h3>
                                <Flex justifyContent="space-between">
                                    <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                                        <Text>
                                            Décarbonation :
                                            <Badge ml='1' fontSize='0.8em' colorScheme={ ship.percentage_decarbonization > 79 ? 'green' : 'purple' }>
                                                { ship.percentage_decarbonization } %
                                            </Badge>
                                        </Text>
                                    </chakra.h3>
                                </Flex>
                            </HStack>
                            <HStack>
                                <Badge ml='1' fontSize='0.8em' colorScheme={ ship.type === "freight"  ? 'blue' : 'cyan' }>
                                    { ship.type === "freight"  ? "Marchandises" : "Passagers" }
                                </Badge>
                                <Text fontSize="lg" fontWeight="500">
                                    { ship.location }
                                </Text>
                            </HStack>
                            <Flex alignItems="center" color="gray.500">
                                {ship.detail.map((data:string, index: number) => (
                                    <Fragment key={index}>
                                        <Text fontSize={{ base: 'sm', sm: 'md' }}>{data}</Text>
                                        {ship.detail.length - 1 !== index && (
                                            <chakra.span mx={2} fontSize={{ base: 'sm', sm: 'md' }}>
                                                |
                                            </chakra.span>
                                        )}
                                    </Fragment>
                                ))}
                            </Flex>
                            <Stack
                                direction={{ base: 'column-reverse', sm: 'row' }}
                                justifyContent="space-between"
                                alignItems={{ base: 'flex-start', sm: 'center' }}
                            >
                                <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
                                    Prochain départ : { ship.next_departure }
                                </Text>
                                <Stack direction="row" spacing={1} mb="0 !important">
                                    { ship.subscription_link &&
                                        <Button leftIcon={<FaPeopleCarry />}
                                                colorScheme="blue"
                                                rounded="md"
                                                variant='outline'
                                        >
                                            <Link isExternal href={ ship.subscription_link }>
                                                Devenir sociétaire
                                            </Link>
                                        </Button>
                                    }
                                    { ship.type === 'passengers' &&
                                        <Button leftIcon={<IoTicketSharp />}
                                                colorScheme="purple"
                                                rounded="md"
                                                variant='outline'
                                        >
                                            <Link isExternal href={ ship.subscription_link }>
                                                Réserver mes billets
                                            </Link>
                                        </Button>
                                    }
                                    { ship.type === 'freight' &&
                                        <ContactCarrier
                                            ship={ship}
                                        />
                                    }
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                        {index === 2 &&
                            <VelicConsulting/>
                        }
                    </>
                ))}
            </VStack>
        </Container>
    );
};

export default List;
