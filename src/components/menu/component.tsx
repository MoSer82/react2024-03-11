import { FC, ReactNode } from "react";

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}

export interface MenuProps {
    menu: MenuItem;
    children?: ReactNode
}

export const Menu: FC<MenuProps> = ({ menu }) => {
    return (
        <div>{ menu.name }</div>
    )
}