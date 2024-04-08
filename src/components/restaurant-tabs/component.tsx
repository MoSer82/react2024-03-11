import { FC } from "react";
import { Tab } from "../tab/component";
import { RestaurantInterface } from "../../models/restaurant";
import "./styles.module.scss";

interface Props {
    restaurants: RestaurantInterface[];
    onTabClick: (idx: number) => void;
    currentIndex: number;
}
export const RestaurantTabs: FC<Props> = ({ restaurants, onTabClick, currentIndex }) => {
    return (
        <nav>
            { restaurants.map((restaurant, index) => (
                <Tab title={ restaurant.name } onClick={ () => onTabClick(index) } isActive={ currentIndex === index } />
            ))
            }
        </nav>
    );
}