import React from 'react'
import RecipeCard from '../components/RecipeCard';
import { useRecipeContext } from '../context/RecipeContext';


const FavouritesPages = () => {
    const {state} = useRecipeContext();
    if(state.favorites.length === 0) {
        return(
        <p className='text-center'>No favourites added yet.</p>
        ) 
    }
  return (
    <div className='p-4'>
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {
                    state.favorites.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>

                    ))}
            </div>
        </div>
     
    </div>
  )
}

export default FavouritesPages