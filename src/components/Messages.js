import {useState,useEffect} from 'react';
import Contact from './Contact';

import './Messages.css';

const Messages = ({notifications, setNotifications}) => {
  const [contact, setContact] = useState([])
  console.log(contact);

	useEffect(() => {
		const getData = () => {
			fetch("https://miadil.github.io/starwars-api/api/all.json")
				.then((res) => res.json())
				.then((res) => setContact(res))
		}
		getData()
	}, [])

  console.log(contact);

  return (
    <div className="messages">
      <div className="welcomemessages">
        <h2 className="module">Messages</h2>
        Bienvenue sur le module messages.<br />
        Ici vous pouvez communiquer avec les autres membres de Star Seducer.
      </div>
      <div className="messagerie">
        <div className="contacts">
          <div className="contact">
          {contact.map((character) => (
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