import { Container } from '@material-ui/core';
import React from 'react'
import { useState } from 'react'
import './Form.css'
import Questionaire1 from './Questionaire1';
import Questionaire2 from './Questionaire2';
import Questionaire3 from './Questionaire3';
import Questionaire4 from './Questionaire4';
import Questionaire5 from './Questionaire5';
import Questionaire6 from './Questionaire6';
import Questionaire7 from './Questionaire7';
import Questionaire8 from './Questionaire8';
import Questionaire9 from './Questionaire9';
import Questionaire10 from './Questionaire10';
import CongoScreen from './CongoScreen';
import EarlyStage from './EarlyStage';

function Form() {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        radio: "",
        mr: "",
        capital: "",
        raisedRadio: "",
        drivers: "",
        coFounder: "",
        exradio: "",
        month: "",
        year: ""

    });

    const PageDisplay = () => {
        if (page === 0) {
            return <Questionaire1
                setPage={setPage}
            />
        } else if (page === 1) {
            return <Questionaire2
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />;
        } else if (page === 2) {
            return <Questionaire3
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 3) {
            return <Questionaire4
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 4) {
            return <Questionaire5
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 5) {
            return <Questionaire6
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 6) {
            return <Questionaire7
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 7) {
            return <Questionaire8
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 8) {
            return <Questionaire9
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 9) {
            return <Questionaire10
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
            />
        } else if (page === 10) {
            return <CongoScreen
                page={page}
                setPage={setPage}
            />
        } else {
            return <EarlyStage/>
        }
    }

    return (
        <div className='QuestionaireFrom'>
            <Container>
                <div>
                    <h1 className='form-title'>pitchBLACK</h1>
                    {PageDisplay()}
                </div>
            </Container>
        </div>
    )
}

export default Form