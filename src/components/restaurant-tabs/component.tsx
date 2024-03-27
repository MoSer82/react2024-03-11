import { FC } from "react";
import { Tab } from "../tab/component";
import { RestaurantInterface } from "../../models/restaurant";

interface Props {
    restaurants: RestaurantInterface[];
    onTabClick: (idx: number) => void;
    currentIndex: number;
}
export const RestaurantTabs: FC<Props> = ({ restaurants, onTabClick, currentIndex }) => {
    return (
        <div>
            { restaurants.map((restaurant, index) => (
                <Tab title={ restaurant.name } onClick={ () => onTabClick(index) } isActive={ currentIndex === index } />
            ))
            }
        </div>
    );
}