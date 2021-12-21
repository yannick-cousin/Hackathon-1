import {useState,useEffect} from 'react';
import Contact from './Contact';

import './Messages.css';

const Messages = ({notifications, setNotifications}) => {
  const [characters, setCharacters] = useState([])
  console.log(characters);

	useEffect(() => {
		const getData = () => {
       for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * (88 - 1)) + 1;
        fetch(`https://miadil.github.io/starwars-api/api/id/${random}.json`)
				  .then((res) => res.json())
				  .then((res) => setCharacters({res}))
    }}
      getData()  
    }, [])

  return (
    <div className="messages">
      <div className="welcomemessages">
        <h2 className="module">Messages</h2>
        Bienvenue sur le module messages.<br />
        Ici vous pouvez communiquer avec les autres membres de Star Seducer.
      </div>
      <div className="messagerie">
        <div class="contacts">
          <div class="contact">
          {characters.map((character) => (
					<Contact
						key={character.id}
						id={character.id}
						name={character.name}
					/>
          ))}
          </div>
        </div>
        <div class="receptionmessages">
        </div>
        <div class="zonesaisie">
        </div> 
      </div>
    </div>
  )
}

export default Messages;