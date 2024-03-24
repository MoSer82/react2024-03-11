import { FC } from "react";
import { Menus } from "../menus/component";
import { Reviews } from "../reviews/components";
import { MenuItem } from "../menu/component";
import { ReviewItem } from "../review/component";

export interface RestaurantItem {
    id: string;
    name: string;
    menu: MenuItem[];
    reviews: ReviewItem[];
}

interface RestaurantProps {
    restaurant: RestaurantItem | null
}

export const Restaurant: FC<RestaurantProps> = ( { restaurant } ) => (
    <section>
        <h2>{ (restaurant?.name)? (restaurant.name ) : ('Нет названия') }</h2>
        {
            (restaurant?.menu?.length)? (
                <Menus menus={ restaurant.menu } />
            ) : (
                <div>Нет меню</div>
            )
        }
        {
            (restaurant?.reviews?.length)? (
                <Reviews reviews={ restaurant.reviews } />
            ): (
                <div>Нет отзывов</div>
            )
        }
    </section>    
)