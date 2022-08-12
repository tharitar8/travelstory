import './Create.css'

import { useState } from 'react'

function Create() {
	const [title, setTitle] = useState('')
	const [cookingTime, setCookingTime] = useState('')
	const [method, setMethod] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, cookingTime, method)
  }

	return (
		<div className='create'>
			<h2 className='page-title'> Add more places </h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Place:</span>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						required></input>
				</label>

				<label>
					<span>Story:</span>
					<textarea
						onChange={(e) => setMethod(e.target.value)}
						value={method}
						required></textarea>
				</label>

				<label>
					<span>Time:</span>
					<input type="number"
						onChange={(e) => setCookingTime(e.target.value)}
						value={cookingTime}
						required></input>
				</label>

        <button className="btn">submit</button>
			</form>
		</div>
	)
}

export default Create
