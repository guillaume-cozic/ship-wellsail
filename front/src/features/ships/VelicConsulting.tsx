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

    let ship = {
        id: 9999,
        title: 'Velic consulting',
        detail: [],
        location: '',
        next_departure: '',
        percentage_decarbonization: 0,
        image: '',
        subscription_link: '',
        type: '',
        website: '',
        ticketing: '',
        show_contact_btn: false,
        flag: '',
        velic_consulting: '',
    };

    return (
        <Stack
            key="velic"
            spacing={{base: 2, md: 4}}
            direction={{base: 'column', md: 'row'}}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{sm: "98%", md:"90%", '2xl':"70%"}}
            overflow="hidden"
        >
            <Grid templateColumns='repeat(10, 1fr)' gap={2}>
                <GridItem colSpan={{base: 10, md: 3}} minW="367px" display="flex" justifyContent="center">
                    <Image
                        rounded="md"
                        objectFit="cover"
                        src="https://media.licdn.com/dms/image/D4E0BAQEhqQg_V6rIQg/company-logo_200_200/0/1692347401618/velic_consulting_logo?e=2147483647&v=beta&t=A3RT410rsl6HzdSbe13Y5Yux7EDva8l28hPlALVDkZU"
                        alt="Velic consulting"
                    />
                </GridItem>
                <GridItem colSpan={{base: 10, md: 7}} display="grid" alignContent="space-between">
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
                                Accompagnement
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Recherche de financement
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Etude de marché
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                Développement web
                            </ListItem>
                        </List>
                    </Flex>
                    <Stack direction={{md: "row-reverse", base: "column"}} spacing={1}>
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
