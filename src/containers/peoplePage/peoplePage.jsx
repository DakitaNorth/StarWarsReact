import React, { useState, useEffect } from "react";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PeopleList from "@components/peoplePage/peopleList/peopleList";
import PeopleNavigation from "@components/peoplePage/peopleNavigation/peopleNavigation";

import { getApiResource, changeHTTP } from "@utils/network";

import { getPeopleId, getPeopleImage, getPeoplePageId } from "@services/getPeopleData";

import { API_PEOPLE } from "@constans/api";

import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./peoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {

    const query = useQueryParams();
    const queryPage = query.get("page");

    const [people, setPeople] = useState([]);
    const [counterPage, setCounterPage] = useState(1);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    const getResource = async (URL) => {
        const res = await getApiResource(URL);

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
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(URL));
            setErrorApi(false);
        }
        else {
            setErrorApi(true);
        }
    };

    return (
        <>
            <h1 className="visually-hidden">Navigation</h1>
            <PeopleNavigation
                getResource={getResource}
                counterPage={counterPage}
                prevPage={prevPage}
                nextPage={nextPage}
            />
            <PeopleList people={people} />
        </>
    );
}

export default withErrorApi(PeoplePage);
