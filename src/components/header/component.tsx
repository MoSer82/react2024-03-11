interface HeaderProps {
    children?: React.ReactNode
}

export function Header({ children }: HeaderProps) {
    return (
        <header>
            { children }
        </header>
    );
}