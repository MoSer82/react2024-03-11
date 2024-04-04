import { FC, useState } from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/components";
import { RestaurantInterface } from "../../models/restaurant";
import styles from "./styles.module.scss";
import classNames from "classnames";


interface Props {
    restaurant: RestaurantInterface | null;
}

export const Restaurant: FC<Props> = ( { restaurant } ) => {

    const [visible, setVisible] = useState(false);
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
                                        <Reviews reviews={ restaurant.reviews } />
                                    </div>
                                
                            ) : null
                        }
                    </div>
            </div>        
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
        </section>    
    )
}