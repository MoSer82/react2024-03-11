import ReactDOM from "react-dom/client";
import { App } from "./App";

const rootElem = document.getElementById("root")! as Element;
const root = ReactDOM.createRoot(rootElem);

root.render(
    <App />
);