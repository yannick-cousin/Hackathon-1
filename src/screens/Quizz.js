import React, { useState } from 'react';
import './Quizz.css';


export default function Quizz() {
	const questions = [
		{
			questionText: 'Où habites-tu ?',
			answerOptions: [
				{ answerText: 'Naboo', match: 'Anakin' },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
		{
			questionText: 'question 2',
			answerOptions: [
				{ answerText: 'Naboo', match: 'Anakin' },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: 'Vlad' },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
		{
			questionText: 'question 3',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: 'Vlad' },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
		{
			questionText: 'question 4',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 5',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 6',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 7',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 8',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 9',
			answerOptions: [
				{ answerText: 'Naboo', match1: true },
				{ answerText: 'Kashyyyk', match2: true },
				{ answerText: 'Kamino', match3: true },
				{ answerText: 'Stewjon', match4: true },
                { answerText: 'Tatooine', match5: true },
                { answerText: 'Dagobah', match6: true },
			],
		},
        {
			questionText: 'question 10',
			answerOptions: [
				{ answerText: 'Naboo', match1: true },
				{ answerText: 'Kashyyyk', match2: true },
				{ answerText: 'Kamino', match3: true },
				{ answerText: 'Stewjon', match4: true },
                { answerText: 'Tatooine', match5: true },
                { answerText: 'Dagobah', match6: true },
			],
		},
        {
			questionText: 'question 11',
			answerOptions: [
				{ answerText: 'Naboo', match1: true },
				{ answerText: 'Kashyyyk', match2: true },
				{ answerText: 'Kamino', match3: true },
				{ answerText: 'Stewjon', match4: true },
                { answerText: 'Tatooine', match5: true },
                { answerText: 'Dagobah', match6: true },
			],
		},
        {
			questionText: 'question 12',
			answerOptions: [
				{ answerText: 'Naboo', match1: true },
				{ answerText: 'Kashyyyk', match2: true },
				{ answerText: 'Kamino', match3: true },
				{ answerText: 'Stewjon', match4: true },
                { answerText: 'Tatooine', match5: true },
                { answerText: 'Dagobah', match6: true },
			],
		},
        {
			questionText: 'question 13',
			answerOptions: [
				{ answerText: 'Naboo', match1: true },
				{ answerText: 'Kashyyyk', match2: true },
				{ answerText: 'Kamino', match3: true },
				{ answerText: 'Stewjon', match4: true },
                { answerText: 'Tatooine', match5: true },
                { answerText: 'Dagobah', match6: true },
			],
		},
        {
			questionText: 'question 14',
			answerOptions: [
				{ answerText: 'Naboo', match1: true },
				{ answerText: 'Kashyyyk', match2: true },
				{ answerText: 'Kamino', match3: true },
				{ answerText: 'Stewjon', match4: true },
                { answerText: 'Tatooine', match5: true },
                { answerText: 'Dagobah', match6: true },
			],
		},
        {
			questionText: 'question 15',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 16',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 17',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
        {
			questionText: 'question 18',
			answerOptions: [
				{ answerText: 'Naboo', match: true },
				{ answerText: 'Kashyyyk', match: true },
				{ answerText: 'Kamino', match: true },
				{ answerText: 'Stewjon', match: true },
                { answerText: 'Tatooine', match: true },
                { answerText: 'Dagobah', match: true },
			],
		},
	];

    

    const [currentQuestion, setCurrentQuestion] = useState(0); // state de la question

	let myArray = [
		{
			scoreMatch1: 0, 
		},
		{
			scoreMatch2: 0,
		},
		{
			scoreMatch3: 0, 
		},
		{
			scoreMatch4: 0, 
		},
		{
			scoreMatch5: 0,
		},
		{
			scoreMatch6: 0,
		}
	]
    
    const answerResponse = (match) => {
        if (match === 'Anakin') { 
            (myArray[0].scoreMatch1 += 1);
            console.log(myArray);

        }

        else if (match === 'Vlad') {
            (myArray[1].scoreMatch2 += 1);
            console.log(myArray);

        }

        else if (match === 'Vlad') {
            (myArray[2].scoreMatch3 += 1);
            console.log(myArray);

        }
        else if (match === 'Jake') {
            myArray[3].scoreMatch4 += 1;
            console.log(myArray);

        }
        else if (match === 'Bel') {
            myArray[4].scoreMatch5 += 1;
            console.log(myArray);

        }
        else if (match === 'John') {
            myArray[5].scoreMatch6 += 1;
            console.log(myArray);

        } 
		let currentNumber = currentQuestion; 
		if(currentQuestion < 19){
			setCurrentQuestion(currentNumber += 1);
		} else {
			console.log(myArray);
		}
    }

	return (
		<div className='app'>	
			<div className='score-section'>Tu auras un match avec les {questions.length} questions. </div>
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
		</div>
	);
}