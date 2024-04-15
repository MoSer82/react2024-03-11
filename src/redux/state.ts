import { RestaurantState } from "../models/restaurant";
import { MealState } from "../models/meal";
import { ReviewState } from "../models/review";
import { UserState } from "../models/user";

export type State = {
    restaurant: RestaurantState;
    meal: MealState;
    review: ReviewState;
    user: UserState;
}