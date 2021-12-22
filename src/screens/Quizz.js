import React, { useState } from 'react';
import './Quizz.css';


export default function Quizz() {
	const questions = [
		{
			questionText: 'Où habites-tu ?',
			answerOptions: [
				{ answerText: 'Naboo', match: 'R2D2' },
				{ answerText: 'Kashyyyk', match: 'Chewbacca' },
				{ answerText: 'Korriban', match: 'Palpatine' },
				{ answerText: 'Stewjon', match: 'Padme' },
                { answerText: 'Tatooine', match: 'JarJarBinks' },
                { answerText: 'Dagobah', match: 'Obiwan' },
			],
		},
		{
			questionText: 'Comment préfères-tu te battre ?',
			answerOptions: [
				{ answerText: 'Pas besoin de se battre quand on peut fuir', match: 'JarJarBinks' },
				{ answerText: 'Avec un taser', match: 'R2D2' },
				{ answerText: 'Avec un pistolet laser', match: 'Padme' },
				{ answerText: 'Avec une arbalète laser', match: 'Chewbacca' },
                { answerText: 'Avec la force', match: 'Obiwan' },
                { answerText: 'Avec des putains d`éclairs', match: 'Palpatine' },
			],
		},
		{
			questionText: 'Comment préfères-tu te déplacer',
			answerOptions: [
				{ answerText: 'En uber, car je suis un entrepreneur galactique', match: 'Padme' },
				{ answerText: 'A pieds, car je suis un sportif', match: 'Chewbacca' },
				{ answerText: 'Sur mon trône, transporté sur le dos de mes serviteurs', match: 'Palpatine' },
				{ answerText: 'Sur une moto du turfu qui lévite', match: 'Obiwan' },
                { answerText: 'Quand je ne fuis pas, je préfère ne pas bouger', match: 'JarJarBinks' },
                { answerText: 'En vaisseau', match: 'R2D2' },
			],
		},
		{
			questionText: 'Les poils, ça te dérange ?',
			answerOptions: [
				{ answerText: 'Oui, ça dégoute sa mère', match: 'Padme' },
				{ answerText: 'Non tranquille, je te caresse tel mon animal de compagnie', match: 'Chewbacca' },
			],
		},
        {
			questionText: 'Quel côté de la force ?',
			answerOptions: [
				{ answerText: 'Côté obscur', match: 'Palpatine' },
				{ answerText: 'Côté clair', match: 'Obiwan' },
			],
		},
        {
			questionText: 'plutôt balade perdu dans le peuple ou plutôt rester entre richous ?',
			answerOptions: [
				{ answerText: 'J`irai dormir chez les gueux', match: 'JarJarBinks' },
				{ answerText: 'OKLM dans la jet 7', match: 'Padme' },
				
			],
		},
        {
			questionText: 'Tu as les yeux:',
			answerOptions: [
				{ answerText: 'Jaunes', match: 'Palpatine' },
				{ answerText: 'Verts', match: 'Padme' },
				{ answerText: 'Bleus', match: 'Obiwan' },
				{ answerText: 'Marrons', match: 'JarJarBinks' },
                { answerText: 'Noisettes', match: 'Chewbacca' },
                { answerText: 'Je dispose de caméras pour pouvoir voir', match: 'R2D2' },
			],
		},
        {
			questionText: 'Ton principal ennemi',
			answerOptions: [
				{ answerText: 'Aucun, je me range du côté du plus fort', match: 'JarJarBinks' },
				{ answerText: 'L`empire', match: 'Chewbacca' },
				{ answerText: 'Les Jedis', match: 'Palpatine' },
				{ answerText: 'La rouille', match: 'R2D2' },
                { answerText: 'Le côté obscure de la force', match: 'Obiwan' },
                { answerText: 'Les séparatistes', match: 'Padme' },
			],
		},
        {
			questionText: 'Quel est ton métier ?',
			answerOptions: [
				{ answerText: 'Guerrier', match: 'Chewbacca' },
				{ answerText: 'Jeune entrepreneur', match2: 'Padme' },
				{ answerText: 'Jedi', match3: 'Obiwan' },
				{ answerText: 'Chômeur', match4: 'JarJarBinks' },
                { answerText: 'Mécanicien', match5: 'R2D2' },
                { answerText: 'Politique', match6: 'Palpatine' },
			],
		},
        {
			questionText: 'On te qualifie généralement de :',
			answerOptions: [
				{ answerText: 'Maléfique', match: 'Palpatine' },
				{ answerText: 'Gros lâche', match2: 'JarJarBinks' },
				{ answerText: 'Brave défenseur de la veuve et de l`orphelin', match3: 'Obiwan' },
				{ answerText: 'Beau gosse jeune entrepreneur', match4: 'Padme' },
                { answerText: 'De portugais à cause de te pilosité imposante', match5: 'Chebacca' },
                { answerText: 'Corbeille de salle de bain', match6: 'R2D2' },
			],
		},
	];

    

    const [currentQuestion, setCurrentQuestion] = useState(0); // state de la question
	const [love, setLove] = useState('');

	let [myArray, setMyArray] = useState([
		{
			Palpatine: 0, 
			JarJarBinks: 0,
			Padme: 0, 
			Chewbacca: 0, 
			Obiwan: 0,
			R2D2: 0,
		}
	])
    
    const answerResponse = (match) => {
        if (match === 'Palpatine') { 
            myArray[0].Palpatine += 1;
            console.log(myArray);
		}

        else if (match === 'JarJarBinks') {
            myArray[0].JarJarBinks += 1;
            console.log(myArray);
        }

        else if (match === 'Padme') {
            myArray[0].Padme += 1;
            console.log(myArray);
        }
        else if (match === 'Chewbacca') {
            myArray[0].Chewbacca += 1;
            console.log(myArray);
        }
        else if (match === 'Obiwan') {
            myArray[0].Obiwan += 1;
            console.log(myArray);
        }
        else if (match === 'R2D2') {
            myArray[0].R2D2 += 1;
            console.log(myArray);
        } 


		let currentNumber = currentQuestion; 
		if(currentQuestion < 9){
			setCurrentQuestion(currentNumber += 1);
			console.log(currentQuestion)
		} else {
			let biggest = '';
			for(let name in myArray[0]){
				if(biggest !== '' && myArray[0][name] > myArray[0][biggest]){
					biggest = name; 	
				} else if (biggest === ''){
					biggest = name; 
				}
			}
			setLove(biggest); 
		}
    }

	return (
		<div className='quizContainer'>
			<div className='app'>
			<div className='score-section'>
				 
			</div>
			<div className='question-section'>
				<div className='question-count'>
					<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className='question-text'>
					{questions[currentQuestion].questionText}
				</div>
			</div>
			<div className='answer-section'>
				{
					questions[currentQuestion].answerOptions.map((answerOption)=> 
					<button 
						onClick={() => answerResponse(answerOption.match)}>
						{answerOption.answerText}
					</button>)
				}
			</div>
			<div className="loveIs">
				You have matched with {love}
			</div>
			</div>
		</div>
	);
}