import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/component";
import { restaurants } from "./assets/mock";
import { Restaurant, RestaurantItem } from "./components/restaurant/component";

const rootElem = document.getElementById("root")! as Element;
const root = ReactDOM.createRoot(rootElem);

root.render(
    <Layout>
        {
            (restaurants?.length) ? (
                restaurants.map((item) => (
                    <Restaurant restaurant={ item as RestaurantItem } />
                ))
            ) : null
        }
    </Layout>
);