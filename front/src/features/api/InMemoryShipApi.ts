export class InMemoryShipApi {

    private ships:Array<Ship> = [
        {
            id: 1,
            title: 'Grain de sail II - Grain de sail',
            location: 'Saint-malo | Caraïbes',
            detail: ['350T', '8n'],
            next_departure: '2024',
            percentage_decarbonization: 90,
            image: 'https://media.ouest-france.fr/v1/pictures/MjAyMTA3OWQwZDliZmExMDE5M2QyYmVlMDFiYTJjN2I4NWJlMmY?width=1260&focuspoint=50%2C62&cropresize=1&client_id=bpeditorial&sign=c42d54797209f0a22b6fab397440f9a0f0a7dfdebc79704b2f7784d7727e9ed2',
            type: 'freight',
            subscription_link: '',
        },
        {
            id: 2,
            title: 'Windcoop',
            location: 'Marseille | Majunga et Toamasina, Madagascar',
            detail: ['1400T', '8n'],
            next_departure: '2026',
            percentage_decarbonization: 10,
            image: 'https://static.actu.fr/uploads/2022/11/le-premier-container-a-voile-pour-arcadie.jpg',
            type: 'freight',
            subscription_link: '',
        },
        {
            id: 3,
            title: 'Sailcoop',
            type: 'passengers',
            location: 'Saint-Raphaël | Calvi Corse',
            detail: ['8 passagers'],
            next_departure: 'Avril 2024',
            percentage_decarbonization: 90,
            image: 'https://media.ouest-france.fr/v1/pictures/MjAyMjA1MmNiYTcwMGJiMmZiYzc1MGMyZGFhZDM4NTBmODUxYTY?width=1260&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=b256d313ae43518b28d1299fe28951652e836c3af4dad631cbd04105c45b4aca',
            subscription_link:'https://souscription.sailcoop.fr',
        }
    ];

    async fetch(filter: { type: string | undefined }): Promise<Array<Ship>> {
        let ships = this.ships;
        if (filter.type !== undefined) {
            ships = this.ships.filter(ship => ship.type === filter.type);
        }
        return Promise.resolve(ships);
    }
}
