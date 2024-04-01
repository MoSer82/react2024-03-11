import { FC, ReactNode } from "react";
import { Counter } from "../counter/component";
import { MealInterface } from "../../models/meal";

export interface Props {
    meal: MealInterface;
    children?: ReactNode
}

export const Meal: FC<Props> = ({ meal }) => {
    return (
        <div>
            { meal.name }
            <Counter key={ meal.id } initialCount={ 0 }/>
        </div>
    )
}