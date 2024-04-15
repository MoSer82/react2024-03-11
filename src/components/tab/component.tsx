import { FC, MouseEventHandler } from "react";
import { useCurrentTheme } from "../../contexts/theme";
import { RestaurantInterface } from "../../models/restaurant";
import { State } from "../../redux/state";
import { useSelector } from "react-redux";

interface Props {
    restaurantId: string;
    onClick: MouseEventHandler,
    isActive: boolean;
}

export const Tab: FC<Props> = ({ restaurantId, onClick, isActive }) => {
    const { theme } = useCurrentTheme();
    const restaurant = useSelector<State, RestaurantInterface>((state) => state.restaurant.entities?.[restaurantId]);

    if (!restaurant) {
        return null;
    }

    return (
        <button onClick={ onClick } disabled={ isActive } className={theme + ' tab_button'}>{ restaurant.name }</button>
    );
}