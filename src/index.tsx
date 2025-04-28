import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExamplesListIphone } from "./screens/ExamplesListIphone";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ExamplesListIphone />
  </StrictMode>,
);
