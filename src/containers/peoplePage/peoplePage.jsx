import { useState, useEffect } from "react";

import { API_PEOPLE } from "@constans/api";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PeopleList from "@components/peoplePage/peopleList/peopleList";

import styles from "./peoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        getResource(API_PEOPLE);
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
            setErrorApi(false);
        }
        else {
            setErrorApi(true);
        }
    };

    const peopleStandart = people.map(({ id, name, img }) => {
        return (
            <PeopleList
                key={id}
                id={id}
                name={name}
                img={img}
            />
        )
    });

    return (
        <>
            <h1>Navigation</h1>
            <ul className={styles.list__container}>
                {peopleStandart}
            </ul>
        </>
    );
}

export default withErrorApi(PeoplePage);
