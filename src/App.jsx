
import { RecipeProvider } from './context/RecipeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Search from './pages/Search'
import FavouritesPages from './pages/FavouritesPages'
import RecipeDetails from './pages/RecipeDetails'

function App() {
  
  return (
    <RecipeProvider>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Search/>} />
            <Route path='/recipe/:id' element={<RecipeDetails/>} />
            <Route path='/favorites' element={<FavouritesPages/>} />
        </Routes>
      </Router>
      </RecipeProvider>
  )
}

export default App
