import Contact from './Contact';
import ListingMessages from './ListingMessages';
import SaisieMessage from './SaisieMessage';

import {useState, useEffect} from 'react';

import './Messages.css';

const Messages = () => {
	const [contact, setContact] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [contenueMessage, setContenueMessage] = useState([
		{	id: 0,
		idu: 1,
		message: "Bonjour, j'adore votre drôle de chapeau. Je me sens triste ce soir Dînons ensemble.",
		date: "31/10/2942",
		heure: "21:23"
	},
	{	id: 1,
		idu: 1,
		message: "Je vous ai trouvé sexy à la TV. Dînons ensemble.",
		date: "15/11/2942",
		heure: "19:45"
	},
	{	id: 2,
		idu: 1,
		message: "Je n'ai pas faim. Dînons ensemble.",
		date: "07/12/2942",
		heure: "20:30"
	}
]);

	useEffect(() => {
		const getData = () => {
			fetch(`https://miadil.github.io/starwars-api/api/id/10.json`)
			.then((res) => res.json())
			.then((res) => setContact(res));
		}
		setIsLoading(true)
		getData();
	},
	[])
	
	return (
		<div className="messages">
			 {console.log("retour :",contact)}
			<div className="welcomemessages">
				<h2 className="module">Messages</h2>
				Bienvenue sur le module messages.<br />
				vous pouvez communiquer avec les autres membres de Star Seducer.
			</div>
			<div className="contacts">
			{isLoading ? <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        />
			: <div className="loader-container"><div className="Loader"></div></div>}
				<div className="receptionmessages">
				{contenueMessage.map((message) => (
					<ListingMessages 
						id={message.id}
						message={message.message}
						date={message.date}
						heure={message.heure}
					/>))}
				</div>
				<div className="saisieMessage">
					<SaisieMessage 
						setContenueMessage={setContenueMessage}
						contenueMessage={contenueMessage}
					/>
				</div>
			</div>
		</div>
	)
}


export default Messages;