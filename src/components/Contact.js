import './Contact.css';

const Contact = ({key, id, name}) => {
  return (
    <div className="renducontact">
      <div className="name">From : {name}</div>
    </div>
  )
}


export default Contact;