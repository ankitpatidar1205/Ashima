
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; 
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>             
        <App />
    </Provider>
   
);

