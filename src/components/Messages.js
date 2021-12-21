import {useState,useEffect} from 'react';
import Contact from './Contact';

import './Messages.css';

const Messages = ({notifications, setNotifications}) => {
  const [contact, setContact] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
	const [listMessage, setListMessage] = useState([]);

  let listContact = [];

	const messages = [
		{	id: 1, 
			idu: 1,
			message: 'Hey, tu aimes les sabres laser',
			heure: "19:50"
		},
		{	id: 2,
			idu: 1,
			message : 'Le mien est vert',
			heure: "19:51"
		},
		{	id: 3,
			idu: 2,
			message: "Salut BG, cela te dirait qu'on se voit ?",
			heure: "10:41"
		},
		{	id: 4,
			idu: 3,
			message: "Bonjour, j'adore votre drôle de chapeau. Je me sens triste ce soir, dinons ensemble.",
			heure: "08:00"
		},
		{	id: 5,
			idu: 3,
			message: "Je vous ai trouvé sexy à la TV, dinons ensemble.",
			heure: "09:00"
		},
		{	id: 6,
			idu: 3,
			message: "Je n'ai pas faim, dinons ensemble."
		}
	];

	useEffect(() => {
		const getData = () => {
			const update = (list) => {
				listContact = contact;
				listContact.unshift(list);
				console.log(listContact);
				setContact(listContact);
			}

			fetch("https://miadil.github.io/starwars-api/api/id/1.json")
				.then((res) => res.json())
				.then((res) => update(res));
      fetch("https://miadil.github.io/starwars-api/api/id/2.json")
				.then((res2) => res2.json())
				.then((res2) => update(res2));
      fetch("https://miadil.github.io/starwars-api/api/id/3.json")
				.then((res3) => res3.json())
				.then((res3) => update(res3));
      fetch("https://miadil.github.io/starwars-api/api/id/4.json")
				.then((res4) => res4.json())
				.then((res4) => update(res4));
      
		}
		getData();
		setIsLoading(true);
	}, [])

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
          {isLoading ? (
              contact.map((character) => (
                <Contact
                  key={character.id}
                  id={character.id}
                  name={character.name}
                />
              ))) : (<div className="loading"></div>) }
          </div>
          
        </div>
        <div className="receptionmessages">
					Reception des messages ici !
        </div>
        <div className="zonesaisie">
					Zone de saisie ici.
        </div>
      </div>
    </div>
  )
}

export default Messages;