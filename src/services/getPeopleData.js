import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, SWAPI_PARAM_PAGE, GUIDE_IMG_EXTENSIONS, URL_IMG_PERSON } from "@constans/api";


export const getPeoplePageId = (URL) => {
    const pos = URL.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = URL.slice(pos + SWAPI_PARAM_PAGE.length, URL.length);
    
    return Number(id);
};

const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI_ROOT + category, "")
        .replace(/\//g, "");
    return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSIONS}`;