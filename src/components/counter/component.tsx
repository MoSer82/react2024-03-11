import { FC } from "react";
import { useCurrentTheme } from "../../contexts/theme";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
    className?: string;
    currentAmount: number;
    decrement: (amount: number) => void;
    increment: (amount: number) => void;
}

export const Counter: FC<Props> = ({ currentAmount, decrement, increment, className }) => {

    const _className = className || 'odd';
    const { theme } = useCurrentTheme();

    return (
        <div className={ classNames(styles.counter, styles[_className] ) }>
            <button className={ theme } onClick={ () => { decrement(currentAmount) }} disabled={ currentAmount <= 0}>-
            </button>
            { currentAmount }
            <button className={ theme } onClick={ ()=> { increment(currentAmount) }} disabled={ currentAmount >= 5}>+</button>
        </div>
    )
}