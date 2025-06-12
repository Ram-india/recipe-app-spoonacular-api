import React from 'react'
import {Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  return (
    <div className='border p-4'>
        <img src={recipe.image} alt={recipe.title} className='w-full h-48 object-cover mb-4' />
        <h2 className='text-xl font-bold'>{recipe.title}</h2>
        <Link to={`/recipe/${recipe.id}` } className='text-blue-600'>Veiw Details</Link>
    </div>
  )
}

export default RecipeCard