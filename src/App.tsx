import { useEffect, useMemo, useState } from "react";
import { restaurants } from "./assets/mock";
import { Layout } from "./components/layout/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { Restaurant } from "./components/restaurant/component";
import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";

const getSavedRestaurantIndex = () => {
    return Number(localStorage.getItem('currentRestaurantIndex') || 0);
}

const saveRestaurantIndex = (index: number) => {
    localStorage.setItem('currentRestaurantIndex', index.toString());
}

export const App = () => {

    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(getSavedRestaurantIndex);

    useEffect(() => {
        saveRestaurantIndex(currentRestaurantIndex)
    }, [currentRestaurantIndex]);

    const { theme, toggleTheme } = useTheme();
    const { user, login, logout } = useUser();

    const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [ theme, toggleTheme ]);
    const userContextValue = useMemo(() => ({ user, login, logout }), [ user, login, logout ]);

    return (
        <ThemeContext.Provider value={ themeContextValue }>
            <UserContext.Provider value={ userContextValue }>
                <Layout>
                    {
                        (restaurants?.length) ? (
                            <>                              
                                <RestaurantTabs restaurants={ restaurants } onTabClick={ setCurrentRestaurantIndex } currentIndex={ currentRestaurantIndex }/>

                                <Restaurant key={ restaurants[currentRestaurantIndex].id } restaurant={ restaurants[currentRestaurantIndex] } />
                            </>
                        ) : 
                        (
                            <>
                                No info
                            </>
                        )
                    }
                </Layout>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}