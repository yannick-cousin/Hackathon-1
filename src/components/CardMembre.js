import { useState, useEffect } from "react"
import React from 'react'
import './CardMembre.css'; 

function CardMembre(props) {

    const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
		const getData = () => {
			fetch("https://miadil.github.io/starwars-api/api/all.json")
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
					characters.filter((characters) => characters.id < 26 ||characters.bornLocation === "naboo").map((character) => (
						<div className="cardMemberSolo">
							
                            <img className="CardImg" src={character.image} alt={character.name} />
							<div className="basCard">
							<p>{character.name}</p>
							<p className="sousCard">From {character.homeworld}</p>
							</div>



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
