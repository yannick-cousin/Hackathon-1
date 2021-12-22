import './Contact.css';

const Contact = ({key, id, name}) => {
  return (
    <div className="renducontact">
      <div className="name">{name}</div>
      <div className="isFavourite"></div>
    </div>
  )
}

export default Contact;