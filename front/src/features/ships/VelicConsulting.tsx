import {
    chakra,
    Stack,
    Flex,
    Image,
    Badge, HStack, List, ListItem, ListIcon, Grid, GridItem
} from '@chakra-ui/react';
import {MdCheckCircle} from "react-icons/md";
import {ContactCarrier} from "./ContactCarrier";

const VelicConsulting = () => {

    let baseUrl = import.meta.env.VITE_API_URL;

    let ship = {
        id: 9999,
        title: 'Velic consulting',
        detail: [],
        location: '',
        next_departure: '',
        percentage_decarbonization: 0,
        image: 'velic_consulting_logo.jpeg',
        subscription_link: '',
        type: '',
        website: '',
        ticketing: '',
        show_contact_btn: false,
        flag: '',
        velic_type: '',
    };

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
                        alt="Velic consulting"
                    />
                </GridItem>
                <GridItem colSpan={{base: 10, md: 6, xl: 7}} display="grid" alignContent="space-between">
                    <HStack spacing={2}>
                        <chakra.h3 fontWeight="bold">
                            Velic consulting
                        </chakra.h3>
                        <Badge colorScheme="orange">
                            Collectif de freelances
                        </Badge>
                    </HStack>
                    <Flex>
                        <List justifyContent="left !important">
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Accompagnement sur l'utilisation du vent pour votre projet
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Recherche de financement - montage de dossier - levée de fonds
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Etude de marché - formation
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Développement web sur mesure - Mise en place solution open source
                            </ListItem>
                        </List>
                    </Flex>
                    <Stack direction={{ base:"column", xl:"row-reverse", md:"column" }} spacing={1}>
                        <ContactCarrier
                            ship={ship}
                            showVelic={true}>
                        </ContactCarrier>
                    </Stack>
                </GridItem>
            </Grid>
        </Stack>
    );
};

export default VelicConsulting;
