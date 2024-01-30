import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<TaskList />} />
				<Route path='/task/new' element={<TaskForm />} />
			</Routes>
		</BrowserRouter>
	)
}
