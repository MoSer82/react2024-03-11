import { useEffect, useState } from "react";
import { restaurants } from "./assets/mock";
import { Layout } from "./components/layout/component";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { Restaurant } from "./components/restaurant/component";
import { ThemeContext } from "./contexts/theme";
import { AuthContext } from "./contexts/auth";

const getSavedRestaurantIndex = () => {
    return Number(localStorage.getItem('currentRestaurantIndex') || 0);
}

const saveRestaurantIndex = (index: number) => {
    localStorage.setItem('currentRestaurantIndex', index.toString());
}

export const App = () => {

    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(getSavedRestaurantIndex);
    const [theme, setTheme] = useState('dark');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        saveRestaurantIndex(currentRestaurantIndex)
    }, [currentRestaurantIndex]);

    return (
        <Layout>
            {
                (restaurants?.length) ? (
                    <>
                        <button className="theme_toggle_button" onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark') }>Тема: { theme }</button>
                        <ThemeContext.Provider value={ theme }>
                            <AuthContext.Provider value={ userName }>
                                {
                                    userName ? (
                                        <div className="auth_block">
                                            <span>{ userName }</span>
                                            <button className={ theme } onClick={ () => setUserName('') }>Выйти</button>
                                        </div>
                                    )  : (
                                        <div className="auth_block">
                                            <button className={ theme } onClick={ ()=> setUserName('Sergey') }>Войти</button>
                                        </div>
                                    )
                                }                                
                                <RestaurantTabs restaurants={ restaurants } onTabClick={ setCurrentRestaurantIndex } currentIndex={ currentRestaurantIndex }/>

                                <Restaurant key={ restaurants[currentRestaurantIndex].id } restaurant={ restaurants[currentRestaurantIndex] } />
                            </AuthContext.Provider>
                        </ThemeContext.Provider>
                    </>
                ) : 
                (
                    <>
                        No info
                    </>
                )
            }
        </Layout>
    )
}