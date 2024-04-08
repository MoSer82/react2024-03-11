import { createSlice } from "@reduxjs/toolkit";
import { MealInterface } from "../../../models/meal";
import { normalizedDishes } from "../../../assets/normalized-mock";

type MealEntity = Record<string, MealInterface>;

export const mealSlice = createSlice({
    name: 'meal',
    reducers: {},
    initialState: {
        ids: normalizedDishes.map(({ id }) => id),
        entities: normalizedDishes.reduce((acc: MealEntity, dish) => {
            acc[dish.id] = dish;
            return acc;
        }, {})
    }
});