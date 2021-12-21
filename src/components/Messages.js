import {useState,useEffect} from 'react';
import Contact from './Contact';
import ListingMessages from './ListingMessages';

import './Messages.css';

const Messages = ({notifications, setNotifications}) => {
  const [contact, setContact] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
	const [selectContact, setSelectContact] = useState(1);
  let listContact = [];
	let selectMessage = [];

	const messages = [
		{	id: 0, 
			idu: 1,
			message: 'Hey, tu aimes les sabres laser ?',
			heure: "19:50"
		},
		{	id: 1,
			idu: 1,
			message : 'Le mien est vert',
			heure: "19:51"
		},
		{	id: 2,
			idu: 2,
			message: "Salut BG, cela te dirait qu'on se voit ?",
			heure: "10:41"
		},
		{	id: 3,
			idu: 3,
			message: "Bonjour, j'adore votre drôle de chapeau. Je me sens triste ce soir, dînons ensemble.",
			heure: "21:00"
		},
		{	id: 4,
			idu: 3,
			message: "Je vous ai trouvé sexy à la TV, dînons ensemble.",
			heure: "09:00"
		},
		{	id: 5,
			idu: 3,
			message: "Je n'ai pas faim, dînons ensemble.",
			heure: "19:00"
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

			for (let i = 0; i < 5; i++) {
				fetch(`https://miadil.github.io/starwars-api/api/id/${i}.json`)
				.then((res) => res.json())
				.then((res) => update(res));
			}
		}
		getData();
		setIsLoading(true);
	}, [])
	
	for (let i = 0; i < messages.length; i++) {
		if (selectContact === messages[i].idu) {
			selectMessage.push(messages[i]);
		}
	}

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
              ))) : (<div className="loading"></div>) 
					}
          </div>
        </div>
        <div className="receptionmessages">
					{selectMessage.map((message) => (
					<ListingMessages 
						id={message.id}
						message={message.message}
						heure={message.heure}
					/>))}
        </div>
        <div className="zonesaisie">
					Zone de saisie ici.
        </div>
      </div>
    </div>
  )
}

export default Messages;