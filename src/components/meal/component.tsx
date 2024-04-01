import { FC, ReactNode } from "react";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/useCount";
import { MealInterface } from "../../models/meal";

export interface Props {
    meal: MealInterface;
    children?: ReactNode
}

export const Meal: FC<Props> = ({ meal }) => {
    const { amount, decrement, increment } = useCount();
    return (
        <div>
            { meal.name }
            <Counter  currentAmount={ amount } decrement={ decrement } increment={ increment }/>
        </div>
    )
}