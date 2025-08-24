import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Route from "./routes";
import { Provider } from "react-redux";
import { store } from "./store/authStore";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <Route />
        </Provider>
    </StrictMode>
);
