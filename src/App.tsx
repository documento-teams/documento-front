import "./App.css";
import { useTranslation } from "react-i18next"; // Importation du hook de traduction
import "./i18n";
import { Suspense } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Changer la langue
  };

  return (
    <div>
      <h1>{t("main.welcome")}</h1>
      <p>{t("main.description")}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
}
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
