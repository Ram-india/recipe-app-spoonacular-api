const BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = 'deb89262840743c4958bff7d52df2739';

export const getRecipes = async (query) => {
    const response = await fetch (
        `$(BASE_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`
    );
    return response.json();
};

export const getRecipeDetails = async (id) => {
    const response = await fetch(
        `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
    );
    return response.json();
};
