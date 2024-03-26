import { Container, Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';

export default function ModalInfo() {
    return (
        <Container maxW={'5xl'} py={8} px={{ base: 5, md: 10 }}>
            <Box
                maxW="64rem"
                marginX="auto"
                py={{ base: '3rem', md: '4rem' }}
                px={{ base: '1rem', md: '0' }}
            >
                <Flex
                    as="section"
                    alignItems="start"
                    justifyContent="between"
                    flexDirection={{ base: 'column', md: 'row' }}
                    my={{ base: '1.5rem', md: '2.5rem' }}
                    borderBottom="1px solid"
                    borderTop="1px solid"
                    borderColor="gray.300"
                    pb={8}
                >
                    {featuresList.map((feature) => {
                        return (
                            <Box
                                key={feature.id}
                                w={{ base: '100%'}}
                                px={{ md: '0.5rem' }}
                                mb={{ base: '6', md: '0' }}
                            >
                                <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
                                    {feature.title}
                                </Text>
                                <Text
                                    color={useColorModeValue('gray.700', 'gray.400')}
                                    fontSize="0.875rem"
                                    fontWeight="300"
                                    textAlign="left"
                                    mt={3}
                                    mb={1}
                                >
                                    {feature.desc}
                                </Text>
                            </Box>
                        );
                    })}
                </Flex>
            </Box>
        </Container>
    );
}

export const featuresList = [
    {
        id: 1,
        title: '24/7 customer support',
        desc: `Day or night, we’re here for you. Talk to our support team from anywhere in the world,
    any hour of day.`,
    }
];
