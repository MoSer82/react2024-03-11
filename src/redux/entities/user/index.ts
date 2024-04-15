import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../assets/normalized-mock";
import { UserInterface } from "../../../models/user";

type UserEntity = Record<string, UserInterface>;

export const userSlice = createSlice({
    name: 'user',
    reducers: {},
    initialState: {
        ids: normalizedUsers.map(({ id }) => id),
        entities: normalizedUsers.reduce((acc: UserEntity, user) => {
            acc[user.id] = user;
            return acc;
        }, {})
    }
})