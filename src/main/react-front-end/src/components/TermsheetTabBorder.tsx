import React from 'react';

type Props = {
    tabLabel : string, 
    title: string
}

const TermsheetTabBorder : React.FC<Props> = ({tabLabel, title}: Props) => {
    return (
        <li className="nav-item" role="presentation">
            <button className="nav-link" id={`${tabLabel}-tab`} data-bs-toggle="tab" data-bs-target={`#bordered-${tabLabel}`} type="button" role="tab" aria-controls={`${tabLabel}`} aria-selected="true">{title}</button>
        </li>
    );
}

export default TermsheetTabBorder;