// reducer = object = data
// action = function = feed the data
import axios from "axios";

export default getStarWarsData =() = dispatch => {
    axios.get("https://swapi.co/api/people")
    .then ( res =>
        
        )
}