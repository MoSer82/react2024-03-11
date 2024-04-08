import { FC } from "react";
import { Tab } from "../tab/component";
import "./styles.module.scss";
import { useSelector } from "react-redux";
import { State } from "../../redux/state";

interface Props {
    onTabClick: (id: string) => void;
    currentRestaurantId: string;
}
export const RestaurantTabs: FC<Props> = ({ onTabClick, currentRestaurantId }) => {
    const restaurantIds = useSelector<State, string[]>((state) => state.restaurant.ids);
    return (
        <nav>
            { restaurantIds.map((restaurantId) => (
                <Tab restaurantId={ restaurantId } onClick={ () => onTabClick(restaurantId) } isActive={ currentRestaurantId === restaurantId } />
            ))
            }
        </nav>
    );
}