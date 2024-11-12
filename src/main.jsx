import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App66 from "./practice/App66.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App66 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
