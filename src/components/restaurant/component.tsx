import { FC, useState } from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/components";
import { RestaurantInterface } from "../../models/restaurant";
import { State } from "../../redux/state";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

interface Props {
    restaurantId: string;
}

export const Restaurant: FC<Props> = ( { restaurantId} ) => {

    const [visible, setVisible] = useState(false);
    const restaurant = useSelector<State, RestaurantInterface>((state) => state.restaurant.entities?.[restaurantId]);
    return (
        <section className={styles.restaurant}>
            <div className={ styles.restaurant_title }>
                <h2>{ (restaurant?.name)? (restaurant.name ) : ('Нет названия') }</h2>
                    <div className={ 
                        classNames(
                            styles.reviews,
                            {
                                [styles.visible]: visible
                            }
                            ) }>
                        <span 
                            className={ 
                                classNames(
                                    { 
                                        [styles.reviews_link]: restaurant?.reviews?.length 
                                    })
                            }
                            onClick={ () => setVisible(!visible) }
                            >{ visible ? ('Скрыть') : ( <>Отзывы ({ restaurant?.reviews?.length || 0 })</> ) }</span>
                        {
                            (restaurant?.reviews?.length) ? (                                
                                    <div className={ styles.reviews_inner }>
                                        <Reviews reviewIds={ restaurant.reviews } />
                                    </div>
                                
                            ) : null
                        }
                    </div>
            </div>        
            {
                (restaurant?.menu?.length)? (
                    <>
                        <h3>Меню</h3>
                        <Menu menuIds={ restaurant.menu } />
                    </>
                ) : (
                    <div>Нет меню</div>
                )
            }
        </section>    
    )
}