import { useEffect, useState } from "react"
import { restaurants } from "./assets/mock"
import { Layout } from "./components/layout/component"
import { RestaurantTabs } from "./components/restaurant-tabs/component"
import { Restaurant } from "./components/restaurant/component"

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

    return (
        (restaurants?.length) ? (
            <Layout>
                <RestaurantTabs restaurants={ restaurants } onTabClick={ setCurrentRestaurantIndex } currentIndex={ currentRestaurantIndex } />

                <Restaurant restaurant={ restaurants[currentRestaurantIndex] } />
            </Layout>
        ) : 
        (
            <Layout>
                No info
            </Layout>
        )
    )
}