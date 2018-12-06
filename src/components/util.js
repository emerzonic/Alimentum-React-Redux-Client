
export default {

getRecipeObj : (rawObj) => {
            let ingredients = [],
                measurement = [],
                keys = Object.keys(rawObj);
                
            keys.forEach(function(key){
            if( /strIngredient.*/.test(key) && rawObj[key] !== null && rawObj[key] !== ''){
                ingredients.push(rawObj[key]);
            } else if( /strMeasure.*/.test(key) && rawObj[key] !== null && rawObj[key] !== ''){
                measurement.push(rawObj[key]);
                }
            });

            let instructions = rawObj.strInstructions.split('. ');

            let videoId = rawObj.strYoutube.split('v=', 2)[1];
            let youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

            let  refinedRecipeObj = {
                idMeal: rawObj.idMeal,
                strMeal: rawObj.strMeal, 
                strArea: rawObj.strArea,
                strMealThumb: rawObj.strMealThumb,
                strYoutube: youtubeUrl,
                strSource: rawObj.strSource,
                strCategory: rawObj.strCategory,
                strMeasurements: measurement,
                strIngredients: ingredients,
                strInstructions: instructions  
            };
        
            return refinedRecipeObj;
         
}
}


