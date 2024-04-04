import { FC, MouseEventHandler, useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

interface Props {
    title: string;
    onClick: MouseEventHandler,
    isActive: boolean;
}

export const Tab: FC<Props> = ({ title, onClick, isActive }) => {
    const themeName = useContext(ThemeContext);
    return (
        <button onClick={ onClick } disabled={ isActive } className={themeName + ' tab_button'}>{ title }</button>
    );
}