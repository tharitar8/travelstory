import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
	return (
		<div className='navbar'>
			<nav>
				<Link to="/" className="brand">
					<h1> Tour with Gifty </h1>
				</Link>
                <Link to="/create">
                    Add a tour
                </Link>
			</nav>
		</div>
	)
}

export default Navbar
