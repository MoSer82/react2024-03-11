import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../assets/normalized-mock";
import { ReviewInterface } from "../../../models/review";

type ReviewEntity = Record<string, ReviewInterface>;

export const reviewSlice = createSlice({
    name: 'review',
    reducers: {},
    initialState: {
        ids: normalizedReviews.map(({ id }) => id),
        entities: normalizedReviews.reduce((acc: ReviewEntity, review) => {
            acc[review.id] = review;
            return acc;
        }, {})
    }
})