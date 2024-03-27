import { FC } from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/components";
import { RestaurantInterface } from "../../models/restaurant";


interface Props {
    restaurant: RestaurantInterface | null
}

export const Restaurant: FC<Props> = ( { restaurant } ) => (
    <section>
        <h2>{ (restaurant?.name)? (restaurant.name ) : ('Нет названия') }</h2>
        {
            (restaurant?.menu?.length)? (
                <>
                    <h3>Меню</h3>
                    <Menu menu={ restaurant.menu } />
                </>
            ) : (
                <div>Нет меню</div>
            )
        }
        {
            (restaurant?.reviews?.length)? (
                <>
                    <h3>Отзывы</h3>
                    <Reviews reviews={ restaurant.reviews } />
                </>
            ): (
                <div>Нет отзывов</div>
            )
        }
    </section>    
)