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

    return (
        <Stack
            spacing={{base: 2, md: 4}}
            direction={{base: 'column', md: 'row'}}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{sm: "90%", md:"90%", '2xl':"70%"}}
            overflow="hidden"
        >
            <Grid templateColumns='repeat(10, 1fr)' gap={2}>
                <GridItem colSpan={{base:10, md:3}} minW={{'2xl': "367px"}} display="flex" justifyContent="center">
                    <Image
                        rounded="md"
                        objectFit="cover"
                        src={ship.image}
                        alt={ship.title}
                    />
                </GridItem>
                <GridItem colSpan={{base:10, md:7}} display="grid" alignContent="space-between">
                    <Stack mt={2} direction={{ md:"row", base:"column" }} justifyContent="space-between">
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
                            <chakra.h3 fontSize={{base: 'lg', md: 'xl'}} fontWeight="bold">
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
                            </chakra.h3>
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
                    <Stack direction={{ md:"row-reverse", base:"column" }} spacing={1}  >
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
