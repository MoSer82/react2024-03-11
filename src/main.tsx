import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.scss";
import { Provider } from "react-redux";
import { store } from "./redux";

const rootElem = document.getElementById("root")! as Element;
const root = ReactDOM.createRoot(rootElem);

root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);