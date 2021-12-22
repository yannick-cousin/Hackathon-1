import Contact from './Contact';

import {useState, useEffect} from 'react';

import './Messages.css';

const Messages = () => {
	const [contact, setContact] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	let listContact = [];

	const update = (list) => {
		listContact = contact;
		console.log("listing :",listContact);
		listContact.unshift(list);
		setContact(listContact);
	}

	useEffect(() => {
		const getData = () => {
			for (let i = 1; i < 5; i++) {
				//setContact([]);
				fetch(`https://miadil.github.io/starwars-api/api/id/${i}.json`)
				.then((res) => res.json())
				.then((res) => console.log("poulet") || update(res));
			}
			setIsLoading(true)
		}
		getData();
	},[])
		useEffect(() => {console.log("Wesh")},[contact])
	return (
		<div className="messages">
			 {console.log("retour :",contact)}
			<div className="welcomemessages">
				<h2 className="module">Messages</h2>
				Bienvenue sur le module messages.<br />
				vous pouvez communiquer avec les autres membres de Star Seducer.
			</div>
			<div className="contacts">
			{isLoading ? contact.map((character) => (
				<Contact
        key={character.id}
        id={character.id}
        name={character.name}
        />
        )) 
			: <div className="isLoading">...Loading...</div>}
			</div>
		</div>
	)
}


export default Messages;