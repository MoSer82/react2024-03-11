import { FC, MouseEventHandler } from "react";

interface Props {
    title: string;
    onClick: MouseEventHandler,
    isActive: boolean;
}

export const Tab: FC<Props> = ({ title, onClick, isActive }) => {
    return (
        <button onClick={ onClick } disabled={ isActive }>{ title }</button>
    );
}