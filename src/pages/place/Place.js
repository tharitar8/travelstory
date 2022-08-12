import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Place.css'

export default function Place() {
	const { id } = useParams()
	const url = 'http://localhost:3000/places/' + id
	const { error, isPending, data: place } = useFetch(url)

	return (
		<div className='place'>
			{' '}
			{error && <p className='error'>{error}</p>}
			{isPending && <p className='loading'>Loading ...</p>}
			{place && (
				<>
					<h2 className='page-title'>{place.name}</h2>
					<p>Story {place.cookingTime}</p>
					<p>
						{place.funfacts.map((ing) => (
							<p key={ing}>{ing}</p>
						))}
					</p>
					<p className='method'>{place.method}</p>
				</>
			)}
		</div>
	)
}
