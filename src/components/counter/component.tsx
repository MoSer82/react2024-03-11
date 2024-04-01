import { FC } from "react";

interface Props {
    currentAmount: number;
    decrement: (amount: number) => void;
    increment: (amount: number) => void;
}

export const Counter: FC<Props> = ({ currentAmount, decrement, increment }) => {

    return (
        <div>
            <button onClick={ () => { decrement(currentAmount) }} disabled={ currentAmount <= 0}>-
            </button>
            { currentAmount }
            <button onClick={ ()=> { increment(currentAmount) }} disabled={ currentAmount >= 5}>+</button>
        </div>
    )
}