//styles
import './PlaceList.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function PlaceList({ places }) {
	return (
		<div className='place-list'>
			{places.map((place) => (
				<div key={place.id} className='card'>
					<h3>{place.title}</h3>
                    <p>{place.cookingTime} to get there.</p>
                    <div>{place.method.substring(0, 100)}...</div>
                    <Link to={`/places/${place.id}`}>Let's go</Link>
				</div>
			))}
		</div>
	)
}
