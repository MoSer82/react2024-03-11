import { MealInterface } from "./meal";
import { ReviewInterface } from "./review";

export interface RestaurantInterface {
    id: string;
    name: string;
    menu: MealInterface[];
    reviews: ReviewInterface[];
}