import {
    Badge,
    Button,
    chakra,
    Flex,
    Grid,
    GridItem,
    HStack,
    Image,
    Link,
    Stack,
    Text
} from "@chakra-ui/react";
import {Fragment} from "react";
import {FaPeopleCarry} from "react-icons/fa";
import {IoTicketSharp} from "react-icons/io5";
import {ContactCarrier} from "./ContactCarrier";
import type Ship from "../api/Ship";

export const ShipCard = (props: {ship: Ship}) => {
    let ship = props.ship;
    let baseUrl = import.meta.env.VITE_API_URL;
    return (
        <Stack
            direction={{base: 'column', md: 'row'}}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{base: "100%", xl: "70%", '2xl':"70%"}}
        >
            <Grid templateColumns='repeat(10, 1fr)' gap={2} w={{base: "100%"}}>
                <GridItem colSpan={{base:10, md: 4, xl:3, '2xl': 3}} display="flex" justifyContent="center">
                    <Image
                        rounded="md"
                        objectFit="cover"
                        src={baseUrl + '/' + ship.image}
                        alt={ship.title}
                    />
                </GridItem>
                <GridItem colSpan={{base:10, md:6, xl:7}} display="grid" alignContent="space-between">
                    <Stack mt={2} direction={{ xl:"row", md:"column", base:"column" }} justifyContent="space-between">
                        <HStack>
                            <Link target="_blank" href={ship.website}>
                                <chakra.h3 fontSize={{base: 'lg', md: 'xl'}} fontWeight="bold">
                                    {ship.title}
                                </chakra.h3>
                            </Link>
                            { ship.type === "freight" &&
                                <Badge ml={1} fontSize='0.8em' colorScheme="blue">
                                    Marchandises
                                </Badge>
                            }
                            { ship.type === "passengers" &&
                                <Badge ml={1} fontSize='0.8em' colorScheme="cyan">
                                    Passagers
                                </Badge>
                            }
                            { ship.type === "proto" &&
                                <Badge ml={1} fontSize='0.8em'>
                                    Prototype
                                </Badge>
                            }
                        </HStack>
                        <Flex justifyContent="space-between">
                                <Text>
                                    <Badge ml='1' fontSize='0.8em'
                                           colorScheme={ship.percentage_decarbonization > 79 ? 'green' : 'purple'}>
                                        { ship.velic_type && ship.velic_type === 'main' &&
                                            <>Propulsion principale</>
                                        }
                                        { ship.velic_type && ship.velic_type === 'assist' &&
                                            <>Assistance vélique</>
                                        }
                                        { ship.velic_type && ship.velic_type === 'hybrid' &&
                                            <>Propulsion hydride</>
                                        }
                                    </Badge>
                                </Text>
                        </Flex>
                    </Stack>
                    <Stack>
                        <Stack direction="row">
                            <Text fontSize="lg" >
                                Pavillon :
                            </Text>
                            <Image
                                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${ship.flag}.svg`}
                                w="30px"
                            >
                            </Image>
                        </Stack>
                        <Text fontSize="lg" fontWeight="500">
                            {ship.location}
                        </Text>
                        <Text fontSize="sm">
                            Mis en service : {ship.next_departure}
                        </Text>
                        <Flex alignItems="center" color="gray.500">
                            {ship.detail.map((data: string, index: number) => (
                                <Fragment key={index}>
                                    <Text fontSize="sm">{data}</Text>
                                    {ship.detail.length - 1 !== index && (
                                        <chakra.span mx={2} fontSize={{base: 'sm', sm: 'md'}}>
                                            |
                                        </chakra.span>
                                    )}
                                </Fragment>
                            ))}
                        </Flex>
                    </Stack>
                    <Stack direction={{ base:"column", xl:"row-reverse", md:"column" }} spacing={1}  >
                            {ship.subscription_link && ship.subscription_link &&
                                <Button leftIcon={<FaPeopleCarry/>}
                                        colorScheme="blue"
                                        rounded="md"
                                        variant='outline'
                                >
                                    <Link isExternal href={ship.subscription_link}>
                                        Devenir sociétaire
                                    </Link>
                                </Button>
                            }
                            {ship.type === 'passengers' && ship.ticketing &&
                                <Button leftIcon={<IoTicketSharp/>}
                                        colorScheme="purple"
                                        rounded="md"
                                        variant='outline'
                                >
                                    <Link isExternal href={ship.ticketing}>
                                        Réserver mes billets
                                    </Link>
                                </Button>
                            }
                            {ship.type !== 'freight' && ship.show_contact_btn && !ship.ticketing &&
                                <Button
                                        rounded="md"
                                        variant='outline'
                                >
                                    <Link target="_blank" href={props.ship.website}>
                                        Consulter le site web
                                    </Link>
                                </Button>
                            }
                            {ship.type === 'freight' &&
                                <ContactCarrier
                                    ship={ship}
                                    showVelic={false}
                                />
                            }
                    </Stack>
                </GridItem>
            </Grid>
        </Stack>
    );
}
