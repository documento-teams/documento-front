import { useState } from 'react'
// import './App.css'
import MyInput from './components/formulaire'

function App() {
  const inputLabel =[
    {name:'username',type:'text', label:'Nom d\'utilisateur', placeholder:"Entrez nom ",required:false},
    {name:'emai',type:'email', label:'Adresse e-mail', placeholder:"Entrez mail",required:false},
    {name:'password',type:'password', label:'Mot de passe', placeholder:"Entrez votre mot de passe",required:false}
  ]

  const FormInputValeur = (data:any)=>{
    console.log("Donnée soumise : ",data)
  }
  
  return (
    <>
      <MyInput inputLabel={inputLabel} onSubmit = {FormInputValeur} />
    </>
  )
}

export default App
