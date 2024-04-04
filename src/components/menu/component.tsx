import { FC } from "react";
import { Meal } from "../meal/component";
import { MealInterface } from "../../models/meal";
import styles from "./styles.module.scss";

interface Props {
    menu: MealInterface[];
}

export const Menu: FC<Props> = ({ menu }) => (
    <ul className={styles.menu_list}>
        {
            menu.map((meal, index) => (
                <li>
                    <Meal key={ meal.id } meal={ meal } index={ index } />
                </li>
            ))
        }
    </ul>
)