import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    Stack,
    IconButton,
    useDisclosure,
    useColorModeValue
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';

const navLinks = [
    { name: 'Me contacter via linkedin', path: 'https://linkedin.com/in/guillaumecozic', target: "_blank" },
    { name: 'Velic consulting', path: 'https://velic-consulting.com', target: "_blank" }
];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box px={4} boxShadow="lg" width="100%">
            <Flex h={16} alignItems="center" justifyContent="space-between" maxW={800} mx="auto">
                <IconButton
                    size="md"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display={['inherit', 'inherit', 'none']}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Avatar
                        href="#"
                        as={Link}
                        size="sm"
                        showBorder={true}
                        borderColor="blue.400"
                        rounded="full"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                    />
                    <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }} alignItems="center">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                    </HStack>
                </HStack>

                <IconButton aria-label="Color Switcher" icon={<FiSun />} />
            </Flex>

            {/* Mobile Screen Links */}
            {isOpen ? (
                <Box pb={4} display={['inherit', 'inherit', 'none']}>
                    <Stack as="nav" spacing={2}>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

interface NavLinkProps {
    name: string;
    path: string;
    onClose: () => void;
    target:string;
}

const NavLink = ({ name, path, onClose, target }: NavLinkProps) => {
    const link = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('blue.500', 'blue.200')
    };

    return (
        <Link
            href={path}
            px={3}
            py={1}
            target={target}
            lineHeight="inherit"
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: link.bg,
                color: link.color
            }}
            onClick={() => onClose()}
        >
            {name}
        </Link>
    );
};
