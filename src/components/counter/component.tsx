import { FC, useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
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
    const themeName = useContext(ThemeContext);

    return (
        <div className={ classNames(styles.counter, styles[_className] ) }>
            <button className={ themeName } onClick={ () => { decrement(currentAmount) }} disabled={ currentAmount <= 0}>-
            </button>
            { currentAmount }
            <button className={ themeName } onClick={ ()=> { increment(currentAmount) }} disabled={ currentAmount >= 5}>+</button>
        </div>
    )
}