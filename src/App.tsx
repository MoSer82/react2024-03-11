import { useEffect, useMemo, useState } from "react";
import { Layout } from "./components/layout/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { Restaurant } from "./components/restaurant/component";
import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";
import { State } from "./redux/state";
import { useSelector } from "react-redux";

const getSavedRestaurantId = () => {
    return localStorage.getItem('currentRestaurantId') || '';
}

const saveRestaurantId = (id: string) => {
    localStorage.setItem('currentRestaurantId', id);
}

export const App = () => {
    
    const restaurantIds = useSelector<State, string[]>((state) => state.restaurant.ids);
    const defaultRestaurantId = () => {
        if (getSavedRestaurantId()) {
            return getSavedRestaurantId();
        } else {
            return restaurantIds[0] ?? null
        }        
    };

    const [currentRestaurantId, setCurrentRestaurantId] = useState(defaultRestaurantId);
    

    useEffect(() => {
        saveRestaurantId(currentRestaurantId)
    }, [currentRestaurantId]);

    const { theme, toggleTheme } = useTheme();
    const { user, login, logout } = useUser();

    const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [ theme, toggleTheme ]);
    const userContextValue = useMemo(() => ({ user, login, logout }), [ user, login, logout ]);

    return (
        <ThemeContext.Provider value={ themeContextValue }>
            <UserContext.Provider value={ userContextValue }>
                <Layout>
                    <>
                        <RestaurantTabs onTabClick={ setCurrentRestaurantId } currentRestaurantId={ currentRestaurantId }/>

                        { currentRestaurantId && <Restaurant restaurantId={ currentRestaurantId } /> }                        
                    </>
                </Layout>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}