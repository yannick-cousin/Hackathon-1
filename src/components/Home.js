import {useState} from 'react';

//Import CSS
import './Home.css';

//import IMG
import actu1 from '../img/gettyimages-1298925533-612x612.jpg';
import actu2 from '../img/gettyimages-1298925545-612x612.jpg';
import actu3 from '../img/soiree-star-wars-au-bar.jpg';
import actu4 from '../img/Club_Outlander.webp';

const Home = () => {

  const [actu, setActu] = useState(1);

  const update = (index) => {
    if (index === 0) {
      setActu(1);
    }
    else if (index === 5) {
      setActu(4);
    }
    else {
      setActu(index);
    }
  }

  return (
    <div className="home">
      <h2>Bienvenue sur Star Seducers</h2>
      <div className='containerPrez'>
      <div className="prez-1">
        Tu veux rencontrer des personnes chaudes comme des culs de fusées au décollage ?<br />
        Tu es au bon endroit !<br />
      </div>
      <div className="prez-2">
        Ici, pas de pression, pas racisme, vous trouverez la personne idéale pour vous. <br />
        N'hesitez pas à faire notre quizz afin de vous orientez vers la bonne personne.
      </div>
      <h3>Les actualités chaudes du fin fond de la galaxie</h3>
      </div>
      <div className='containerActus'>
      <div className="boutons">
        <div onClick={() => update(actu-1)} className="boutonActu boutonActuPrecedentMobile">  ‹  </div>
        </div>
      <div className="actualites">
        <div className={actu ===1 ? 'actu-1 active' : 'actu-1'}>
          <img src={actu1} alt="actu1" />
          <span>David Guetta a mixé toute la nuit au Disneyland de Coruscant. Oui, David Guetta est toujours vivant.</span>
        </div>
        <div className= {actu === 2 ? 'actu-2 active' : 'actu-2'}>
          <img src={actu2} alt="actu2" />
          <span>Soirée touche mon sabre laser sur une veille colonie de l'Empire.</span>
        </div>
        <div className={actu === 3 ? 'actu-3 active' : 'actu-3'}>
          <img src={actu3} alt="actu3" />
          <span>Tatooine en feu</span>
        </div>
        <div className={actu === 4 ? 'actu-4 active' : 'actu-4'}>
          <img src={actu4} alt="actu4" />
          <span>Le club Outlander, toujours le lieu avec les soirées les plus folles</span>
        </div>
      </div>
      <div className="boutons">
        <div onClick={() => update(actu+1)} className="boutonActu boutonActuSuivantMobile">  ›  </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
