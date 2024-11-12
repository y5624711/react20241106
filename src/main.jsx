import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App62 from "./practice/App62.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App62 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
