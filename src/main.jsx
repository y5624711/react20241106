import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App51 from "./practice/App51.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App51 />
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
