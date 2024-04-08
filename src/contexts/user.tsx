import { createContext, useCallback, useContext, useState } from "react";

export type UserContextType = {
    user: string | null;
    login?: () => void;
    logout?: () => void;
}

export const UserContext = createContext<UserContextType>({ user: null, login: () => {}, logout: () => {} });

export function useUser(defaultUser = null) {
    const [user, setUser] = useState<string | null>(defaultUser);

    const login = useCallback(() => setUser('Sergey'), [])
    const logout = useCallback(() => setUser(null), []);

    return { user, login, logout }
}

export function useCurrentUser() {
    return useContext(UserContext);
}