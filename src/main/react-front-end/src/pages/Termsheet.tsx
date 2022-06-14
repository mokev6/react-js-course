import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import cookie from "js-cookie";
import TermsheetTab from "../components/TermsheetTab";
import Card from "../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import { termsheetAction, RootState, AppDispatch } from '../store/index'

function Termsheet() {

  const dispatch = useDispatch<AppDispatch>();
  const termsheet = useSelector((state: RootState) => state.termsheet);

  const { t } = useTranslation('common');
  const lang = cookie.get("i18next");

  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  const { id } = useParams();
  console.log("termsheet");

  const fetchTermsheetById = (id: string | undefined) => {
    return async (dispatch: AppDispatch, setError:React.Dispatch<React.SetStateAction<Boolean>>) => {
      await fetch("/termsheet/" + id)
        .then((response) => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then((data) => dispatch(termsheetAction.update(data)))
        .catch(error => setError(true));
    }
  }

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    
    //dispatch(fetchData(id));
    fetchTermsheetById(id)(dispatch, setError);
  
    setIsLoading(false);

  }, [id, lang, dispatch]);

  return (
    <>
      {!isLoading && !error && (
        <>
          <Card>
              <h5 className="card-title">Default Card</h5>
              <span>
                {t('termsheet')} : {termsheet.id}
              </span>
              <br />
              <span>{termsheet.type}</span>
              <br />
              <span>{termsheet.sousType}</span>
          </Card>
          <TermsheetTab />
         </>
      )}
      {isLoading && (
        <div className="card">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">{t('termsheet')}...</span>
          </div>
        </div>
      )}
      {error && <div className="card"><p>existe pas</p></div>}
    </>
  );
}

export default Termsheet;
