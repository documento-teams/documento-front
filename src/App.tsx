import "./App.css";
import { Suspense } from "react";

//Routage
import Routes from "./config/routes";

function App() {
  return (
    <Routes />
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