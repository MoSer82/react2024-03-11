import { FC, useState } from "react";

interface Props {
    initialCount: number;
}

export const Counter: FC<Props> = ({ initialCount }) => {

    let [currentCount, setCurrentCount] = useState(initialCount);

    return (
        <div>
            <button onClick={ () => {
                currentCount > 0 ? setCurrentCount(--currentCount) : 0
            }}>-
            </button>
            { currentCount }
            <button onClick={ ()=> {
                currentCount < 5 ? setCurrentCount(++currentCount) : 5
            }}>+</button>
        </div>
    )
}