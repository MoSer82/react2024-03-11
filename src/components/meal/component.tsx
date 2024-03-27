import { FC, ReactNode } from "react";
import { MealInterface } from "../../models/meal";



export interface Props {
    meal: MealInterface;
    children?: ReactNode
}

export const Meal: FC<Props> = ({ meal }) => {
    return (
        <div>{ meal.name }</div>
    )
}