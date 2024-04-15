import { FC } from "react";
import { Meal } from "../meal/component";
import styles from "./styles.module.scss";

interface Props {
    menuIds: string[];
}

export const Menu: FC<Props> = ({ menuIds }) => (
    <ul className={styles.menu_list}>
        {
            menuIds.map((mealId, index) => (
                <li>
                    <Meal key={ mealId } mealId={ mealId } index={ index } />
                </li>
            ))
        }
    </ul>
)