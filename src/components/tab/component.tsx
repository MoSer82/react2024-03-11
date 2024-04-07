import { FC, MouseEventHandler } from "react";
import { useCurrentTheme } from "../../contexts/theme";

interface Props {
    title: string;
    onClick: MouseEventHandler,
    isActive: boolean;
}

export const Tab: FC<Props> = ({ title, onClick, isActive }) => {
    const { theme } = useCurrentTheme();
    return (
        <button onClick={ onClick } disabled={ isActive } className={theme + ' tab_button'}>{ title }</button>
    );
}