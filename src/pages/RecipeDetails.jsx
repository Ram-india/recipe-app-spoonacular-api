import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeDetails } from '../services/api';

const RecipeDetails = () => {
    const {id} = useParams();
    const[recipe,setRecipe] = useState (null);

    useEffect(() =>{
        const fetchDetails = async () => {
            const data = await getRecipeDetails(id);
            setRecipe(data);
    }
    fetchDetails();
},[id]);
if(!recipe) {
    return <div>Loading...</div>;
}

  return (
    <div className='p-4'>
        <div className="container mx-auto">
            <img src={recipe.image} alt={recipe.title} className='w-full h-64 object-cover mb-4' />
            <h1 className="text-2xl foont-bold">{recipe.title}</h1>
            <p>{recipe.instructions}</p>
        </div>
    </div>
  )
}

export default RecipeDetails