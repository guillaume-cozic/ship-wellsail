import {useEffect} from 'react';
import {Stack} from '@chakra-ui/react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchShips, selectShips} from "./shipsSlice";
import VelicConsulting from "./VelicConsulting";
import {ShipCard} from "./ShipCard";
import {useParams} from "react-router-dom";

const List = () => {
    const dispatch = useAppDispatch();
    let { type } = useParams();

    useEffect(() => {
        dispatch(fetchShips({type: type}));
    }, [dispatch, type]);

    let ships = useAppSelector(selectShips);

    return (
        <Stack display="flex" justifyContent="center" p={2}>
            {ships && ships.map((ship, index) => (
                <Stack key={index} alignItems="center" w="100%">
                    <ShipCard ship={ship}/>
                    {index === 2 &&
                        <VelicConsulting/>
                    }
                </Stack>
            ))}
        </Stack>
    );
};

export default List;
