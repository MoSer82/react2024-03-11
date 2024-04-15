import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { mealSlice } from "./entities/meal";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";

export const store = configureStore({
    reducer: combineSlices (
        restaurantSlice,
        mealSlice,
        reviewSlice,
        userSlice
    )
});