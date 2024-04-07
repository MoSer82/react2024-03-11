import { useCurrentUser } from "../../contexts/user";
import { ThemeContext, useCurrentTheme } from "../../contexts/theme";
import styles from './styles.module.scss';

export function Header() {
    const { user, login, logout } = useCurrentUser();
    const { theme, toggleTheme } = useCurrentTheme();
    return (
        <header>
            <div className={ styles.header_btns }>                
                <ThemeContext.Provider value={ { theme: "dark" }}>
                    <button className={ styles.theme_toggle_button } onClick={ toggleTheme }>Тема: { theme }</button>
                </ThemeContext.Provider>
                <h1>Restaurants</h1>
                {
                    <div className={ styles.auth_block }>
                        <span>{ user }</span>
                        <button className={ theme } onClick={ ( user? logout : login) }>{ user? 'Выйти' : 'Войти'}</button>
                    </div>
                }                  
            </div>
        </header>
    );
}