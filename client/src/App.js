import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import NavBar from './components/NavBar'
import { Container } from '@mui/material'

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Container>
				<Routes>
					<Route path='/' element={<TaskList />} />
					<Route path='/task/new' element={<TaskForm />} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}
