import { useTranslation } from "react-i18next"; // Importation du hook de traduction
import "../i18n";

export default function Home() {
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