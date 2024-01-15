import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET',
            url,
            params,
            headers:{
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log("err:", err.message)
    }
}

export const fetchExercisesByBodypart = async (bodyParts)=>{
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyParts}`);
    return data;
}