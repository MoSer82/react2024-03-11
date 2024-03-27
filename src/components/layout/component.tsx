import { Header } from "../header/component";
import { Footer } from "../footer/component";

interface LayoutProps {
    children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <main>
            <Header />
            { children }
            <Footer />
        </main>
    )
}