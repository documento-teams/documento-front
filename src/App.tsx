import "./App.css";
import { Suspense } from "react";

//Routage
import Routage from "./config/routes";

function App() {
  return (
    <Routage />
  );
}
export function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}

export default App