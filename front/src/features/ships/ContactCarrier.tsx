import {Button, useDisclosure} from "@chakra-ui/react";
import {ContactModal} from "./ContactModal";
import {GoContainer} from "react-icons/go";
import type Ship from "../api/Ship";

export function ContactCarrier(props:{ship: Ship}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button leftIcon={<GoContainer />}
                    colorScheme="green"
                    rounded="md"
                    variant='outline'
                    onClick={onOpen}
            >
                Transporter mes marchandises
            </Button>
            <ContactModal
                ship={props.ship}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
}
