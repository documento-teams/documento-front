import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Configuration d'i18n
i18n
  .use(Backend)
  .use(HttpBackend) // Pour charger les traductions depuis les fichiers JSON
  .use(LanguageDetector) // Détecter la langue automatiquement (ex. via le navigateur)
  .use(initReactI18next) // Permet à React de comprendre i18n
  .init({
    fallbackLng: "en", // Langue par défaut
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Chemin pour charger les fichiers de traduction
    },
  });

export default i18n;
