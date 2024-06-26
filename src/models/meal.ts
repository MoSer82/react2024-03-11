export interface MealInterface {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}

export type MealState = {
    ids: string[];
    entities: Record<string, MealInterface>
}