import { useFetch } from '../../hooks/useFetch'

import './Home.css'
import PlaceList from '../../components/PlaceList'

function Home() {
	const { data, isPending, error } = useFetch('http://localhost:3000/places')

	return (
		<div className='home'>
			{error && <p className='error'>{error}</p>}
			{isPending && <p className='loading'>Loading...</p>}
			{data && <PlaceList places={data} /> }
		</div>
	)
}

export default Home
