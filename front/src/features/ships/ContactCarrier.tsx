import {Button, Link, useDisclosure} from "@chakra-ui/react";
import {ContactModal} from "./ContactModal";
import {GoContainer} from "react-icons/go";
import type Ship from "../api/Ship";
import {FaAnchor} from "react-icons/fa";

export function ContactCarrier(props:{ship: Ship, showVelic: boolean | undefined}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {props.showVelic &&
                <>
                    <Button leftIcon={<FaAnchor/>}
                        colorScheme="orange"
                        rounded="md"
                        variant='outline'
                        onClick={onOpen}
                    >
                    Etre accompagner dans mon projet
                    </Button>
                    <ContactModal
                        ship={props.ship}
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                </>
            }
            {!props.showVelic && props.ship.show_contact_btn &&
                <>
                    <Button leftIcon={<GoContainer/>}
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
            }
            {!props.showVelic && !props.ship.show_contact_btn &&
                <Button
                      rounded="md"
                      variant='outline'
                      onClick={onOpen}
                >
                    <Link target="_blank" href={props.ship.website}>
                        Consulter le site web
                    </Link>
                </Button>
            }
        </>
    );
}
