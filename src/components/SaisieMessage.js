import './SaisieMessage.css'

const SaisieMessage = ({setContenueMessage, contenueMessage}) => {
/*  let message = [];
  
  const update = (list) => {
    setContenueMessage([...contenueMessage, list])
  }
  
  const handleMessageChange = (evt) => {
    this.setState({ message: evt.target.value });
  }
*/
  return (
    <div className="saisiemessage">
      <div className="zonetexte">
        <input type="text" className="elMessage"></input>
      </div>
      <div className="envoi" >Envoyer</div>
    </div>
  )
}

export default SaisieMessage;