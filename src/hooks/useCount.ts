import { useCallback, useState } from "react";

export const useCount = ({ defaultAmount = 0, step = 1 } = {}) => {
    const [amount, setAmount] = useState(defaultAmount);

    const decrement = useCallback(() => setAmount((currentAmount) => currentAmount - step), [step]);
    const increment = useCallback(() => setAmount((currentAmount) => currentAmount + step), [step]);

    return { amount, decrement, increment };
}