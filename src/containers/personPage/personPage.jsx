import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { API_PERSON } from "@constans/api";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";

import PersonInfo from "@components/personPage/personInfo/personInfo";
import PersonPhoto from "@components/personPage/personPhoto/personPhoto";
import PersonLinkBack from "@components/personPage/personLinkBack/personLinkBack";
import UiLoading from "@UI/uiLoading/uiLoading";

import styles from "./personPage.module.css";

const PersonFilms = React.lazy(() => import("@components/personPage/personFilms/personFilms"));

const PersonPage = ({ setErrorApi }) => {

    const { id } = useParams();

    const storeData = useSelector(state => state.favoriteReducer);

    const [personInfo, setPersonInfo] = useState([]);
    const [personName, setPersonName] = useState("");
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState([]);
    const [personFavorite, setPersonFavorite] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            if (res) {
                setErrorApi(false);
                setPersonInfo([
                    { title: "Height", data: res.height },
                    { title: "Mass", data: res.mass },
                    { title: "Hair Color", data: res.hair_color },
                    { title: "Skin Color", data: res.skin_color },
                    { title: "Eye Color", data: res.eye_color },
                    { title: "Birth Year", data: res.birth_year },
                    { title: "Gender", data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);
            }
            else {
                setErrorApi(true);
            }
        })();

    }, []);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <h1 className="visually-hidden">???????????????? ??????????????????</h1>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={id}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    
                    {personFilms && (
                        <Suspense fallback={<UiLoading theme="white" isShadow />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    );
}

export default withErrorApi(PersonPage);
