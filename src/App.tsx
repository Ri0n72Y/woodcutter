import { createRoot } from "react-dom/client";
import App from "./game/App";

function render() {
    createRoot(document.getElementById('app')).render(<App />);
}

render();