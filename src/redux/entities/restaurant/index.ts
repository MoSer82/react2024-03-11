import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../assets/normalized-mock";
import { RestaurantInterface } from "../../../models/restaurant";

type RestaurantEntity = Record<string, RestaurantInterface>;

export const restaurantSlice = createSlice({
    name: 'restaurant',
    reducers: {},
    initialState: {
        ids: normalizedRestaurants.map(({ id }) => id),
        entities: normalizedRestaurants.reduce((acc: RestaurantEntity, restaurant) => {
            acc[restaurant.id] = restaurant;

            return acc;
        }, {})
    }
})