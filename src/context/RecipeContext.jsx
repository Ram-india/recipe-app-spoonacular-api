import  React,{ createContext, useContext, useReducer } from 'react';
import recipeReducer from './recipeReducer';

const RecipeContext = createContext();


 export const RecipeProvider = ({childern}) => {  
    const initialState = {
        recipes:[],
        favourites:[],
        filter:"all ",
    }

    const [state, dispatch] = useReducer(recipeReducer, initialState);
    return(
        <RecipeContext.Provider value={{state, dispatch}}>
            {childern}
        </RecipeContext.Provider>
    )

}
export const useRecipeContext = () => useContext(RecipeContext);    
