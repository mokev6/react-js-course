import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import cookie from "js-cookie";

function Termsheet() {
  const { t } = useTranslation();
  const lang = cookie.get("i18next");

  const [termsheet, setTermsheet] = useState({
    id: 1,
    type: "type",
    ssType: "ssType",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();
  console.log("termsheet");

  useEffect(() => {
    const fetchTermsheetById = async () => {
      setIsLoading(true);
      setError(false);

    const test = `http://localhost:8070/api/termsheet/${id}`;
      await fetch(`/termsheet/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then((data) => setTermsheet(data))
        .catch((error) => setError(true))
        .finally(() => setIsLoading(false));
    };

    fetchTermsheetById();
  }, [id, lang]);

  return (
    <div className="card">
      {!isLoading && !error && (
        <div className="card-body">
          <h5 className="card-title">Default Card</h5>
          <span>
            {t("termsheet")} : {termsheet.id}
          </span>
          <br />
          <span>{termsheet.type}</span>
          <br />
          <span>{termsheet.sousType}</span>
        </div>
      )}
      {isLoading && (
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">{t("termsheet")}...</span>
        </div>
      )}
      {error && <p>existe pas</p>}
    </div>
  );
}

export default Termsheet;
