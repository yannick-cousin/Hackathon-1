import './Profile.css';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import AvatarChange from './AvatarChange';
import CategorieProfile from './CategorieProfile';

const Profile = () => {

  const inputFile = useRef(null) 

  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  const [input, setInput] = useState('')

  const changeHandle = e => {
      setInput(e.target.value)
  }

return (
<div className='Profile'>
<figure className="avatar">
    <AvatarChange />
</figure>

<CategorieProfile 
nameCat="Pseudo" 
lengthCat="16" 
placeholderCat="Votre pseudo" 
defaultValueCat ="Miadil"
/>

<CategorieProfile 
nameCat="Nom complet" 
lengthCat="32" 
placeholderCat="Votre complet" 
defaultValueCat ="Kerkeb Abdou Miadil"
/>

<CategorieProfile 
nameCat="Race" 
lengthCat="24" 
placeholderCat="Votre race" 
defaultValueCat ="Inconnue"
/>

<CategorieProfile 
nameCat="Planéte" 
lengthCat="24" 
placeholderCat="Votre planéte" 
defaultValueCat ="Inconnue"
/>

<CategorieProfile 
nameCat="Email" 
lengthCat="32" 
placeholderCat="Votre email" 
defaultValueCat ="Kerkeb@gmail.com"
/>

<CategorieProfile 
nameCat="Mot de passe" 
lengthCat="32" 
placeholderCat="Votre mot de passe" 
defaultValueCat ="cestpasbienderegarderlecode"
type="password"
/>


<div className="lesBoutons"> 
    <button className='btnAnnuler'>Annuler</button>
    <button className='btnEnregistrer'>Enregister les modifications</button>
</div>





    </div>
  )
}

export default Profile;