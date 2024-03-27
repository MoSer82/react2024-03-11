import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/component";
import { restaurants } from "./assets/mock";
import { Restaurant } from "./components/restaurant/component";
import { RestaurantInterface } from "./models/restaurant";

const rootElem = document.getElementById("root")! as Element;
const root = ReactDOM.createRoot(rootElem);

root.render(
    <Layout>
        {
            (restaurants?.length) ? (
                restaurants.map((restaurant) => (
                    <Restaurant restaurant={ restaurant as RestaurantInterface } />
                ))
            ) : null
        }
    </Layout>
);