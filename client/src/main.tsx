import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./performance/critical.css";

createRoot(document.getElementById("root")!).render(<App />);