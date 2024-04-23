import { Stack, HStack, Link, IconButton } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';

const links = [
    { name: 'Me contacter via linkedin', path: 'https://linkedin.com/in/guillaumecozic', target: "_blank" },
    { name: 'Velic consulting', path: 'https://velic-consulting.com', target: "_blank" }
];

const accounts = [
    {
        url: 'https://linkedin.com/in/guillaume-cozic',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
    }
];

const Footer = () => {
    return (
        <Stack
            maxW="5xl"
            marginInline="auto"
            p={8}
            spacing={{ base: 8, md: 0 }}
            justifyContent="space-between"
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
        >
            {/* Desktop Screen */}
            <HStack spacing={4} alignItems="center">
                {links.map((link, index) => (
                    <Link key={index} href={link.path} fontSize="sm" _hover={{ textDecoration: 'underline' }} target={link.target}>
                        {link.name}
                    </Link>
                ))}
            </HStack>

            <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
                {accounts.map((sc, index) => (
                    <IconButton
                        key={index}
                        as={Link}
                        isExternal
                        href={sc.url}
                        aria-label={sc.label}
                        colorScheme={sc.type}
                        icon={sc.icon}
                        rounded="md"
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default Footer;
