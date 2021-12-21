import './Profile.css';
import React, { useRef, } from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import AvatarChange from './AvatarChange';

const Profile = () => {

  const inputFile = useRef(null) 

  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };

  return (
    <div className='Profile'>
      <figure className="avatar">
{/*           <div className="photoProfile"></div>
          <button onClick={onButtonClick} className='btnChangeAvatar'>✎</button> */}

{/*           <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
 */}

          <AvatarChange />



      </figure>

      <div className='titreCatProfile'>
        <div className='texteCatProfile'>
        Pseudo
        </div>
        <div className='decoLine'></div>
      </div>
      <input className='texteareaProfile' maxlength="16" placeholder='Votre pseudo'></input>
      
      <div className='titreCatProfile'>
        <div className='texteCatProfile'>
          Nom complet
        </div>
        <div className='decoLine'></div>
      </div>
      <input className='texteareaProfile' maxlength="32" placeholder='Votre nom'></input>


      <div className='titreCatProfile'>
        <div>
        Race
        </div>
        <div className='decoLine'></div>
      </div>
      <input className='texteareaProfile' maxlength="24" placeholder='Votre race'></input>


      <div className='titreCatProfile'>
        <div>
        Planéte
        </div>
        <div className='decoLine'></div>
      </div>
      <input className='texteareaProfile' maxlength="24" placeholder='Votre planéte'></input>


      <div className='titreCatProfile'>
        <div>
        Email
        </div>
        <div className='decoLine'></div>
      </div>
      <input className='texteareaProfile' maxlength="32" placeholder='Votre email'></input>


      <div className='titreCatProfile'>
        <div className="titreCatProfileMdp">
        Mot de passe
        </div>
        <div className='decoLine'></div>
      </div>
      <input className='texteareaProfile' maxlength="36" type="password" placeholder='Votre mdp'></input>

<div className="lesBoutons"> 
    <button className='btnAnnuler'>Annuler</button>
    <button className='btnEnregistrer'>Enregister les modifications</button>
</div>





    </div>
  )
}

export default Profile;