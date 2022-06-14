import React from 'react';
import TermsheetTabConditions from './TermsheetTabConditions';
import TermsheetTabContent from './TermsheetTabContent';
import TermsheetTabContract from './TermsheetTabContract';
import TermsheetTabRentalUnit from './TermsheetTabRentalUnit';
import TermsheetTabBorder from './TermsheetTabBorder';
import Card from './Card';
import { useTranslation } from "react-i18next";

function TermsheetTab() {
    
    const { t } = useTranslation('termsheet');

    return (
            <Card>
                <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                    <TermsheetTabBorder title={t('termsheetTabContract')} tabLabel="contract"/>
                    <TermsheetTabBorder title={t('termsheetTabRentalUnit')}  tabLabel="ru"/>
                    <TermsheetTabBorder title={t('termsheetTabCondition')}  tabLabel="condition"/>
                </ul>
                
                <div className="tab-content pt-2" id="borderedTabContent">
                    <TermsheetTabContent tabLabel="contract" children={<TermsheetTabContract/>} />
                    <TermsheetTabContent tabLabel="ru" children={<TermsheetTabRentalUnit/>}/>
                    <TermsheetTabContent tabLabel="condition" children={<TermsheetTabConditions/>}/>
                </div>
            </Card>
    );
}

export default TermsheetTab;