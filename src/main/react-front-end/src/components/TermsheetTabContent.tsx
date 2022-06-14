import React from 'react';

type Props = {
    tabLabel: string
    children: JSX.Element
};

function TermsheetTabContent({tabLabel, children}: Props) {
    return (
        
        <div className="tab-pane fade" id={`bordered-${tabLabel}`} role="tabpanel" aria-labelledby={`${tabLabel}-tab`}>
            {children}
        </div>
        
    );
}

export default TermsheetTabContent;