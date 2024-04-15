import { FC, ReactNode } from "react";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/useCount";
import { MealInterface } from "../../models/meal";
import { State } from "../../redux/state";
import { useCurrentUser } from "../../contexts/user";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

export interface Props {
    mealId: string;
    index: number;
    children?: ReactNode;
}

export const Meal: FC<Props> = ({ mealId, index }) => {
    const { amount, decrement, increment } = useCount();
    const { user } = useCurrentUser();
    const meal = useSelector<State, MealInterface>((state) => state.meal.entities?.[mealId]);
    return (
        <div className={            
            classNames(
                styles.meal,
                {
                    [styles.even]: !(index % 2)
                }
            )
            }>
            <div className={ styles.meal_content }>
                <div className={ styles.meal_name }>{ meal.name }</div>
                <div className={ styles.meal_ingredients }>
                    Состав: { meal.ingredients.map((ingredient) => (
                        <span>{ ingredient }</span>
                    )) }
                </div>
                {
                    user ? (
                        <Counter currentAmount={ amount } decrement={ decrement } increment={ increment } className={ (index % 2) ? 'odd' : 'even' }/>
                    ) : null
                }                
            </div>            
            <div className={ styles.meal_image }>
                <img src={ `./src/assets/images/${ index + 1 }.jpg` } alt="photo" />
            </div>
        </div>
    )
}