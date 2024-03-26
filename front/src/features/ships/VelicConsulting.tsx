import {
    chakra,
    Stack,
    Flex,
    Text,
    Image,
    Badge, Button, Spacer, HStack
} from '@chakra-ui/react';
import {MdEmail} from "react-icons/md";

const VelicConsulting = () => {
    return (
        <Stack
            key="velic"
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
                    src="https://static.actu.fr/uploads/2022/11/le-premier-container-a-voile-pour-arcadie.jpg"
                    alt="product image"
                />
            </Flex>
            <Stack w="100%" direction="column" spacing={2} mt={{ base: '5px !important', sm: 0 }}>
                <HStack spacing={2}>
                    <chakra.h3 fontWeight="bold">
                        Velic consulting
                    </chakra.h3>
                    <Badge colorScheme="orange">
                        Collectif de freelance
                    </Badge>
                </HStack>
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" fontWeight="500">
                        Réalisation de vos projets
                    </Text>
                </Flex>
                <Stack
                    direction={{ base: 'column-reverse', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ base: 'flex-start', sm: 'center' }}
                >
                    <Spacer/>
                    <Button leftIcon={<MdEmail />}
                            colorScheme="orange"
                            rounded="md"
                            variant='outline'
                    >
                        Nous contacter
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default VelicConsulting;
