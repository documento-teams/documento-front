import { useState } from "react";

function MyInput({ inputLabel, selectLabel, onSubmit }: any) {
  // Initialisation de l'état `formData` pour stocker les valeurs des champs du formulaire (inputs + selects)
  const [formData, setFormData] = useState(
    [...inputLabel, ...selectLabel].reduce((acc: any, field: any) => {
      acc[field.name] = ""; // Initialise chaque champ avec une valeur vide
      return acc;
    }, {})
  );

  // Gestion des changements de valeur dans les champs du formulaire
  const handleChangeValue = (e: any) => {
    const { name, value } = e.target; // Récupère le nom et la valeur du champ modifié
    setFormData({
      ...formData, // Copie les valeurs actuelles
      [name]: value, // Met à jour uniquement la valeur du champ modifié
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubit = (e: any) => {
    e.preventDefault(); // Empêche le comportement par défaut (rechargement de la page)
    onSubmit(formData); // Passe les données du formulaire au parent via la fonction `onSubmit`
  };

  return (
    <>
      <form action="" onSubmit={handleSubit}>
        {/* Gestion des inputs dynamiques */}
        {inputLabel.map((input: any, index: any) => (
          <div key={index}>
            <label htmlFor={input.label}>{input.label}</label>
            <input
              id={input.label} // Attribue un id basé sur l'étiquette du champ
              type={input.type} // Type d'input (text, email, password, etc.)
              value={formData[input.name]} // Liaison entre le champ et l'état `formData`
              name={input.name} // Nom unique utilisé pour identifier le champ
              placeholder={input.placeholder} // Texte d'indication dans le champ
              required={input.required} // Rend le champ obligatoire si défini
              onChange={handleChangeValue} // Appelle `handleChangeValue` à chaque changement
            />
          </div>
        ))}

        {/* Gestion des selects dynamiques */}
        {selectLabel.map((select: any, index: any) => (
          <div key={index}>
            <label htmlFor={select.name}>{select.label}</label>
            <select
              id={select.name} // Attribue un id basé sur le nom du select
              name={select.name} // Nom unique pour identifier le champ
              value={formData[select.name]} // Liaison entre le select et l'état `formData`
              onChange={handleChangeValue} // Appelle `handleChangeValue` à chaque changement
            >
              {/* Option par défaut pour inviter l'utilisateur à choisir */}
              <option value="">Select an option</option>
              {/* Génération dynamique des options à partir des métadonnées */}
              {select.options.map((option: any, optIndex: any) => (
                <option value={option.value} key={optIndex}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Bouton de soumission */}
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default MyInput;
