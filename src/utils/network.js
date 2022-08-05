import axios from "axios";

import { HTTPS, HTTP } from "@constans/api";

/**
 * Изменяет URL с HTTP НА HTTPS
 * @param {String} URL - URL для изменения
 * @returns {String} - URL с HTTPS
 */
export const changeHTTP = (URL) => {
    const result = URL ? URL.replace(HTTP, HTTPS) : URL;

    return result;
};

/**
 * Отправляет запрос Axios
 * @param {String} URL - URL для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (URL) => {
    try {
        const res = await axios(URL);

        if (res.status !== 200) {
            console.error("Could not fetch.", res.status);
        }

        return await res.data;
    }
    catch (error) {
        console.error("Could not fetch.", error.message);

        return false;
    }
};

export const makeConcurrentRequest = async (URL) => {
    const res = await Promise.all(URL.map(res => {
        return axios(res).then(res => res.data); 
    }));

    return res;
};