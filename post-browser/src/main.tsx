import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/card/search.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
