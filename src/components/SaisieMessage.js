import './SaisieMessage.css'

const SaisieMessage = ({setContenueMessage, contenueMessage}) => {



  return (
    <div className="saisiemessage">
      <div className="envoi" onClick={()=>alert("Il faudra penser à payer votre abonnement.")} >Accepter la demande de Tchat</div>
    </div>
  )
}

export default SaisieMessage;
