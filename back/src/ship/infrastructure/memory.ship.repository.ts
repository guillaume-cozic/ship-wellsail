import { Ship } from '../domain/ship';
import { ShipRepository } from '../domain/ship.repository';

export class MemoryShipRepository implements ShipRepository {
  private ships: Array<Ship> = [
    {
      id: 1,
      title: 'Grain de sail II',
      location: 'Saint-malo | New-York',
      detail: ['350 tonnes de marchandises'],
      next_departure: '2024',
      percentage_decarbonization: 90,
      image:
        'https://media.ouest-france.fr/v1/pictures/MjAyMTA3OWQwZDliZmExMDE5M2QyYmVlMDFiYTJjN2I4NWJlMmY?width=1260&focuspoint=50%2C62&cropresize=1&client_id=bpeditorial&sign=c42d54797209f0a22b6fab397440f9a0f0a7dfdebc79704b2f7784d7727e9ed2',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://graindesail.com/fr/',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 2,
      title: 'Windcoop',
      location: 'Marseille | Majunga et Toamasina, Madagascar',
      detail: ['1400 tonnes de marchandises'],
      next_departure: '2026',
      percentage_decarbonization: 60,
      image:
        'https://static.actu.fr/uploads/2022/11/le-premier-container-a-voile-pour-arcadie.jpg',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.wind.coop',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 3,
      title: 'Sailcoop',
      type: 'passengers',
      location: 'Saint-Raphaël | Calvi Corse',
      detail: ['8 passagers'],
      next_departure: 'Avril 2024',
      percentage_decarbonization: 90,
      image:
        'https://media.ouest-france.fr/v1/pictures/MjAyMjA1MmNiYTcwMGJiMmZiYzc1MGMyZGFhZDM4NTBmODUxYTY?width=1260&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=b256d313ae43518b28d1299fe28951652e836c3af4dad631cbd04105c45b4aca',
      subscription_link: 'https://souscription.sailcoop.fr',
      ticketing: 'https://resa.sailcoop.fr/fr/voir-et-a-faire',
      website: 'https://www.sailcoop.fr',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 4,
      title: 'Anemos | Towt',
      location: 'Havre | New-York | Caraïbes | Brésil',
      detail: ['1100 tonnes de marchandises'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image:
        'https://www.towt.eu/wp-content/uploads/2022/09/PIRIOU_voilier-cargoTOWT_1-scaled-1-1.jpg',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.towt.eu',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 5,
      title: 'Pahi Fano | Eco Trans Ocean',
      location: 'Bretagne | Polynésie',
      detail: ['Bretagne Polynésie en 6 semaines'],
      next_departure: '2026',
      percentage_decarbonization: 60,
      image:
        'https://www.ecotransocean.com/wp-content/uploads/2021/12/EcoTransOcean_Aplat1.jpg',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.ecotransocean.com',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 6,
      title: 'Hisseo',
      location: 'Marseille | Alicante | Tunis | Palerme | Izmir',
      detail: ['100 tonnes de marchandises'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image:
        'https://hisseo.org/wp-content/uploads/2024/03/voilier-moderne-1024x703.png',
      type: 'freight',
      subscription_link: 'https://hisseo.org/devenir-societaire/',
      ticketing: '',
      website: 'https://hisseo.org',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 7,
      title: 'Iliens',
      location: 'Belle île | Quiberon',
      detail: ['20 passagers'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image: 'https://iliens.fr/wp-content/uploads/2022/05/iliens-2022-1.jpg',
      type: 'passengers',
      subscription_link: '',
      ticketing: 'https://iliens.fr/tarifs-et-horaires-2/',
      website: 'https://iliens.fr',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 8,
      title: 'Neoline',
      location: 'Saint Nazaire | St Pierre et Miquelon | Halifax | Baltimore',
      detail: ['265 EVP'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image:
        'https://www.neoline.eu/wp-content/uploads/2023/01/22407-A-NEOLINER136SS-Vues-3D_Rendu-2-Baltimore-1800x1080.jpg',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.neoline.eu',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 9,
      title: 'Nohé',
      location: 'Portugal | Bretagne',
      detail: ['Confection de vêtements bas carbone'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image:
        'https://www.nohe-wear.com/cdn/shop/files/transport_voile_nohe_mode_responsable_1248x704.jpg?v=1696326531',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.nohe-wear.com',
      show_contact_btn: false,
      flag: 'FR',
    },
    {
      id: 10,
      title: 'SailLink',
      location: 'Dover | Boulogne-sur-Mer',
      detail: ['4 heures de traversé'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image:
        'https://files.wbk.kreativmedia.ch/3b/c6/3bc63aea-d191-45b8-b0db-4ec2a77b83d8.jpg',
      type: 'passengers',
      subscription_link: 'https://saillink.co.uk/invest',
      ticketing: '',
      website: 'https://saillink.co.uk',
      show_contact_btn: false,
      flag: 'GB',
    },
    {
      id: 11,
      title: 'Le Canopée',
      location: 'Bordeaux | Guyanne',
      detail: ["Transport d'arianne 6"],
      next_departure: '2026',
      percentage_decarbonization: 40,
      image:
        'https://www.vplp.fr/wp-content/uploads/2023/03/Header-Canopee-1500x750px-1.png',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.vplp.fr/maritime/canopee/',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 12,
      title: 'Grain de sail I',
      location: 'Saint Malo | Caraïbes',
      detail: ['50 tonnes de marchandises'],
      next_departure: '2024',
      percentage_decarbonization: 90,
      image:
        'https://velic-consulting.com/wp-content/uploads/2023/10/GrainDeSail1.png',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://graindesail.com/fr/',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 13,
      title: 'Le caboteur des îles',
      location: 'Quiberon',
      detail: ['Baie de Quiberon'],
      next_departure: '2026',
      percentage_decarbonization: 90,
      image:
        'https://media.licdn.com/dms/image/D4E0BAQEX2p1uUHRuWA/company-logo_200_200/0/1704297881648?e=1720051200&v=beta&t=fktmWBCMUUmvNAOrBZYI88l_YXdmJcEUox9cej-g_Oo',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website:
        'https://www.linkedin.com/company/le-caboteur-des-%C3%AEles/?originalSubdomain=fr',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 14,
      title: 'Le passeur des îles',
      location: 'Port Navalo - Locmariaquer',
      detail: ['20 min de traversée', '60 passagers'],
      next_departure: '2025',
      percentage_decarbonization: 90,
      image:
        'https://media.letelegramme.fr/api/v1/images/view/6582cae3ad005d5c841166eb/web_golden_xl/6582cae3ad005d5c841166eb.1',
      type: 'passengers',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.passeurdesiles.com',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 15,
      title: 'Terre exotique',
      location: 'Mer Méditerranée, Océan Atlantique, Océan Indien...',
      detail: ["transport d'épices"],
      next_departure: '2024',
      percentage_decarbonization: 90,
      image:
        'https://assets.meretmarine.com/s3fs-public/styles/large_xl/public/images/2024-01/Terre%20Txotique%20Imoca.jpg?h=7a740ff7&itok=TXTqv_uq',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.terreexotique.fr/programme-eole',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 16,
      title: 'Berlin',
      location: 'Allemagne - Danemark',
      detail: ['Rotor'],
      next_departure: '2024',
      percentage_decarbonization: 20,
      image:
        'https://velic-consulting.com/wp-content/uploads/2023/10/Berlin.jpg',
      type: 'passengers',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.scandlines.com',
      show_contact_btn: true,
      flag: 'DE',
    },
    {
      id: 17,
      title: 'COPENHAGEN',
      location: 'Danemark - Allemagne',
      detail: ['Rotor'],
      next_departure: '2024',
      percentage_decarbonization: 20,
      image:
        'https://velic-consulting.com/wp-content/uploads/2023/10/CopenHagen.png',
      type: 'passengers',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.scandlines.com',
      show_contact_btn: true,
      flag: 'DK',
    },
    {
      id: 18,
      title: 'Delphine',
      location: 'North Sea',
      detail: ['Rotor', 'Short Sea Shipping'],
      next_departure: '2024',
      percentage_decarbonization: 20,
      image:
        'https://swzmaritime.nl/wp-content/uploads/2023/02/Delphine-fitted-with-Rotor-sails.jpg',
      type: 'freight',
      subscription_link: '',
      ticketing: '',
      website: 'https://www.cldn.com',
      show_contact_btn: true,
      flag: 'MT',
    },
    {
      id: 19,
      title: 'Bourlingue & Pacotille',
      location: 'Méditerranée',
      detail: ['4 tonnes de marchandises'],
      next_departure: '2024',
      percentage_decarbonization: 90,
      image:
        'https://bourlingueetpacotille.com/wp-content/uploads/2023/07/nav__cie_LD_057-1568x1046.jpg',
      type: 'freight',
      subscription_link:
        'https://bourlingueetpacotille.com/devenir-societaire-de-bourlingue-et-pacotille/',
      ticketing: '',
      website: 'https://bourlingueetpacotille.com',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 20,
      title: 'Sailcoop 61',
      location: 'Les Glénan | Concarneau',
      detail: ['Fabriqué à la Rochelle'],
      next_departure: '2024',
      percentage_decarbonization: 90,
      image:
        'https://media.ouest-france.fr/v1/pictures/MjAyMzA5NzVkMGYxYWJkYWU5NTY5NTA0YzA4YmJkNGYwNzEzY2E?width=1260&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=02691ffdce8d734bfd57bb28bf400e6750e2a225ff8b855c560dc424ba1406b5',
      type: 'passengers',
      subscription_link: 'https://souscription.sailcoop.fr',
      ticketing: '',
      website: 'https://www.sailcoop.fr',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 21,
      title: 'Syroco',
      location: 'Marseille',
      detail: ['Objectif 150 KM/H'],
      next_departure: '2023',
      percentage_decarbonization: 0,
      image:
        'https://media.lesechos.com/api/v1/images/view/62e644d9d345887219143d08/1280x720/0701782796524-web-tete.jpg',
      type: 'proto',
      subscription_link: '',
      ticketing: '',
      website: 'https://syro.co/en/company-about-syroco/',
      show_contact_btn: true,
      flag: 'FR',
    },
    {
      id: 21,
      title: 'The sea kite',
      location: 'Lorient',
      detail: ['Solution de traction par kite'],
      next_departure: '2023',
      percentage_decarbonization: 0,
      image:
        'https://beyond-the-sea.com/wp-content/uploads/2024/04/YVES_PARLIER_BTS_ESSAIS_50M2_FEVRIER_2024_50-copie-1200x899.jpg',
      type: 'proto',
      subscription_link: '',
      ticketing: '',
      website: 'https://beyond-the-sea.com',
      show_contact_btn: true,
      flag: 'FR',
    },
  ];

  private freightTransportRequests: Array<any> = [];

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  async search(filter: { type: string }): Promise<Array<Ship>> {
    this.shuffle(this.ships);
    let ships = this.ships;
    if (filter.type !== undefined) {
      ships = this.ships.filter((ship) => ship.type === filter.type);
    }
    return Promise.resolve(ships);
  }

  async getById(id: number): Promise<Ship> {
    return Promise.resolve(this.ships.find((ship: Ship) => ship.id === id));
  }

  async getFreightTransportRequest(id: number): Promise<any> {
    return Promise.resolve(
      this.freightTransportRequests.filter((item) => item.shipId === id),
    );
  }

  saveFreightTransportRequest(freightTransportRequest: {
    shipId: number;
    email: string;
    content: string;
  }): void {
    this.freightTransportRequests.push(freightTransportRequest);
  }
}
