export default interface Ship {
    id: number;
    title: string;
    detail: string[];
    location: string;
    next_departure: string;
    percentage_decarbonization: number;
    image: string;
    subscription_link: string | undefined;
    type: string;
}
