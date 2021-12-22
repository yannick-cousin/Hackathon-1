import './ListingMessages.css';

const ListingMessages = (props) => {

	return (
		<div className="question">
			<div className="message">{props.message}</div>
			<div className="heure">Reçu le {props.date} à {props.heure}</div>
		</div>
	)
}

export default ListingMessages;