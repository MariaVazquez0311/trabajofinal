import axios from 'axios';
import {GET_CITIES} from'./type';

export const getCities = () => dispach =>{
   /*  dispach(setCitiesLoading()); */
    axios.get('http://localhost:5000/api/city')
    .then(res=>
        dispach({
            type: GET_CITIES,
            payload:res.data
        })
        )
}