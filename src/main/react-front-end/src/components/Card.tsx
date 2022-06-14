import React from 'react';

type Props = {
    children: React.ReactNode
};

const Card : React.FC<Props> = ({children} : Props) => {
    return (
        <div className="card">
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;