// import axios from "axios";

export default {
    
    getRecipeObj: (rawObj) => {
        let ingredients = [],
            measurement = [],
            keys = Object.keys(rawObj);

        keys.forEach(function (key) {
            if (/strIngredient.*/.test(key) && rawObj[key] !== null && rawObj[key] !== '') {
                ingredients.push(rawObj[key]);
            } else if (/strMeasure.*/.test(key) && rawObj[key] !== null && rawObj[key] !== '') {
                measurement.push(rawObj[key]);
            }
        });
        let instructions = [];
        let instString = rawObj.strInstructions.split('. ');
        instString.forEach((instr)=> {
            let instr2 = instr.replace(/\n|\r/g, "");
            let instr3 = instr2.replace(/\.\d+/, ".");
            instructions.push(instr3)
        })

        let videoId = rawObj.strYoutube.split('v=', 2)[1];
        let youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        let refinedRecipeObj = {
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
    },

    getDataArray: (obj) => {
        let array = [];
        for (const key of Object.keys(obj)) {
            array.push(obj[key]);
        }
        return array;
    },
}