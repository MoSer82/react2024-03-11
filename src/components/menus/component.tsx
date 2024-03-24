import { FC } from "react";
import { Menu, MenuItem } from "../menu/component";

interface MenusProps {
    menus: MenuItem[]
}

export const Menus: FC<MenusProps> = ({ menus }) => (
    <div>
        <h3>Меню</h3>
        <ul>
            {
                menus.map((item) => (
                    <li>
                        <Menu menu={ item }/>
                    </li>
                ))
            }
        </ul>
    </div>
)
