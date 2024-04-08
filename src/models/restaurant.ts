export interface RestaurantInterface {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}

export type RestaurantState = {
    ids: string[];
    entities: Record<string, RestaurantInterface>
}