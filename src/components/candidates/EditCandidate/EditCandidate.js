import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {CandidatesApi} from "../../../api/CandidatesApi";
import CandidateForm from "../CandidateForm/CandidateForm";
import {ROUTES_PATHS} from "../../../layout/routes-constants";

const EditCandidate = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
        loading: false,
        candidate: undefined,
        errors: null
    })

    useEffect(() => {
        if (params?.id) {
            setState(prevState => ({
                ...prevState,
                loading: true
            }))
            CandidatesApi.getCandidate(params.id)
                .then(candidate => {
                    setState(prevState => ({
                        ...prevState,
                        loading: false,
                        candidate,
                    }))
                }).catch(errors => setState(prevState => ({
                ...prevState,
                loading: false,
                errors
            })))
        }
    },[params?.id])

    const submitForm = (payload) => {
        CandidatesApi.updateCandidate(payload)
            .then(data => {
                navigate(ROUTES_PATHS.CANDIDATES)
            })
    }

    return (
        <>
            {state.candidate && <CandidateForm submitHandler={submitForm} initialValues={state.candidate}/>}
        </>
    );
};

export default EditCandidate;