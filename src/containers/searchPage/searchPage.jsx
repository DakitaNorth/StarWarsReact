import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource } from "@utils/network";

import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import { API_SEARCH } from "@constans/api";

import SearchPageInfo from "@components/searchPage/searchPageInfo/searchPageInfo";

import UiInput from "@UI/uiInput/uiInput";

import styles from "./searchPage.module.css";

const SearchPage = ({ setErrorApi }) => {

    const [inputValue, setInputValue] = useState("");
    const [people, setPeople] = useState([]);

    const debouncedGetRespones = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    useEffect(() => {
        getResponse("");
    }, []);

    const getResponse = async (param) => {
        const res = await getApiResource(API_SEARCH + param);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            });

            setPeople(peopleList);

            setErrorApi(false);
        }
        else {
            setErrorApi(true);
        }
    };

    const handleInputChange = (value) => {
        setInputValue(value);
        debouncedGetRespones(value);
    };

    return (
        <>
            <h1>Search</h1>
            <UiInput
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                placeholder="Character's name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    );
}

export default withErrorApi(SearchPage);
