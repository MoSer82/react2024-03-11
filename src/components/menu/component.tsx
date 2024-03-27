import { FC } from "react";
import { Meal } from "../meal/component";
import { MealInterface } from "../../models/meal";

interface Props {
    menu: MealInterface[]
}

export const Menu: FC<Props> = ({ menu }) => (
    <ul>
        {
            menu.map((meal) => (
                <li>
                    <Meal meal={ meal }/>
                </li>
            ))
        }
    </ul>
)