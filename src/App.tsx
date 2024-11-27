import { useState } from "react";
// import './App.css' // Vous pouvez décommenter cette ligne si vous avez un fichier CSS pour le style
import MyInput from "./components/formulaire"; // Importation du composant de formulaire personnalisé

function App() {
  // État pour gérer le type de champ de mot de passe (texte ou masqué)
  const [pass, setPass] = useState("password");
  // État pour basculer l'affichage du mot de passe
  const [show, setShow] = useState(true);

  // Définition des métadonnées pour les champs <input> du formulaire
  const inputLabel = [
    {
      name: "username", // Nom de l'attribut utilisé pour lier la valeur
      type: "text", // Type du champ
      label: "Nom d'utilisateur", // Étiquette affichée
      placeholder: "Entrez nom ", // Texte d'indication dans le champ
      required: false, // Champ non obligatoire
    },
    {
      name: "emai",
      type: "email",
      label: "Adresse e-mail",
      placeholder: "Entrez mail",
      required: false,
    },
    {
      name: "password",
      type: pass, // Utilise l'état `pass` pour gérer le type du champ (password ou text)
      label: "Mot de passe",
      placeholder: "Entrez votre mot de passe",
      required: false,
    },
  ];

  // Définition des métadonnées pour les champs <select> du formulaire
  const selectLabel = [
    {
      name: "country", // Nom utilisé pour lier la valeur sélectionnée
      label: "Country", // Étiquette affichée pour le champ <select>
      options: [
        { value: "us", label: "United States" }, // Option pour le pays
        { value: "fr", label: "France" },
        { value: "de", label: "Germany" },
      ],
    },
  ];

  // Fonction pour basculer entre le mode affichage et masqué du mot de passe
  const showPass = async () => {
    setShow(!show); // Inverse la valeur de `show`
    setPass(show ? "text" : "password"); // Change le type du champ en fonction de `show`
  };

  // Fonction de gestion de soumission des données du formulaire
  const FormInputValeur = (data: any, selectData: any) => {
    console.log("Donnée soumise : ", data); // Affiche les données des inputs
    console.log("Donnée soumise : ", selectData); // Affiche les données des selects
  };

  return (
    <>
      {/* Affiche le type de champ (utile pour le débogage) */}
      {pass}
      
      {/* Appel du composant `MyInput` pour afficher le formulaire */}
      <MyInput
        inputLabel={inputLabel} // Passe les métadonnées des inputs au composant
        selectLabel={selectLabel} // Passe les métadonnées des selects au composant
        onSubmit={FormInputValeur} // Passe la fonction de soumission des données
      />

      {/* Bouton pour afficher/masquer le mot de passe */}
      <button onClick={showPass}>Afficher mot de passe</button>
    </>
  );
}

export default App;
