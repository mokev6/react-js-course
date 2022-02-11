import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const termsheetIdEntered = useRef('');
    console.log('search bar');

    const submitFormHandler = (event) => {
        event.preventDefault();

        if (+termsheetIdEntered.current.value) {
            navigate(`/leaseit/termsheet/${termsheetIdEntered.current.value}`);
            termsheetIdEntered.current.value = '';
        } else {
            console.log("not number => lever une erreur")
        }
    }

    return (
        <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" onSubmit={submitFormHandler} autoComplete='off'>
                <input ref={termsheetIdEntered} type="text" name="query" placeholder={t('searchTermsheet')} title={t('enterTermsheetId')} />
                <button type="submit" title={t('searchTermsheet')}><i className="bi bi-search" /></button>
            </form>
        </div>
    );
}

export default SearchBar;