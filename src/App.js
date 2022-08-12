import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles
import './App.css'

// import all page components here
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Place from './pages/place/Place'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
      <Navbar></Navbar>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/search' element={<Search />} />
					<Route path='/create' element={<Create />} />
					<Route path='/places/:id' element={<Place />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
