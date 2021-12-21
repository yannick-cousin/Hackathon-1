import { useState, useEffect } from "react"
import React from 'react'
import './CardMembre.css'; 

function CardMembre(props) {

    const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
		const getData = () => {
			fetch("https://harrypotterapi20.herokuapp.com/characters")
				.then((res) => res.json())
				.then((res) => {
					console.log(res)
					setCharacters(res)
					setIsLoading(true)
				})
		}
		getData()
	}, [])


    return (
        <div className='CardMembre'>
<div className="GaleryCharacters">
				{isLoading ? (
					characters.map((character) => (
						<div>
							<p>{props.name}</p>
                            qsdsqd
                            <img className="CardImg" src={props.image} alt={props.name} />
						</div>
					))
				) : (
					<div>...Loading</div>
				)}
			</div>


        </div>
    )
}

export default CardMembre
