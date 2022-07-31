import axios from "axios";

const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";

export const getApiResource = (URL) => {
    axios.get(URL)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message))
};

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);